import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReceitasContext = createContext(0);

const ReceitasProvider = ({ children }) => {
  const [receitas, setReceitas] = useState([]);
  const [ totalReceitas, setTotalReceitas] = useState(0);

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

  const calcularTotalReceitas = () => {
    let total = 0;
    receitas.forEach((receita) => {
      total += receita.valor; 
    });
    setTotalReceitas( total );
  };

  return (
    <ReceitasContext.Provider
      value={{
        receitas: receitas,
        addReceita,
        getReceitas,
        getReceitaById,
        deleteReceita,
        calcularTotalReceitas,
        totalReceitas: totalReceitas
      }}
    >
      {children}
    </ReceitasContext.Provider>
  );
};

export { ReceitasContext, ReceitasProvider };