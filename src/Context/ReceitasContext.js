import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReceitasContext = createContext();

const ReceitasProvider = ({ children }) => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const getSavedReceitas = async () => {
      try {
        const value = await AsyncStorage.getItem('receitas');
        if (value !== null) {
          setReceitas(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error retrieving receitas:', error);
      }
    };

    getSavedReceitas();
  }, []);

  const addReceita = (receita) => {
    const newReceitas = [...receitas, receita];
    setReceitas(newReceitas);
    saveReceitas(newReceitas);
  };

  const saveReceitas = async (receitas) => {
    try {
      const receitasString = JSON.stringify(receitas);
      await AsyncStorage.setItem('receitas', receitasString);
      console.log('Receitas salvas com sucesso!');
    } catch (error) {
      console.error('Error saving receitas:', error);
    }
  };

  const getReceitas = () => receitas;

  const getReceitaById = (id) => receitas.find((receita) => receita.id === id);

  const deleteReceita = (id) => {
    const newReceitas = receitas.filter((receita) => receita.id !== id);
    setReceitas(newReceitas);
    saveReceitas(newReceitas);
  };

  return (
    <ReceitasContext.Provider
      value={{
        receitas,
        addReceita,
        getReceitas,
        getReceitaById,
        deleteReceita,
      }}
    >
      {children}
    </ReceitasContext.Provider>
  );
};

export { ReceitasContext, ReceitasProvider };