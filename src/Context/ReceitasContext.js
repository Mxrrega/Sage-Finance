import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ReceitasContext = createContext();

export const ReceitasProvider = ({ children }) => {
  
  const [valoreceita, setValorReceita] = useState([]); 
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [conta, setConta] = useState('');
  const [somaReceitas, setSomaReceitas] = useState(0);

  useEffect(() => {
    const getStoredData = async () => {
      try {
        const data = await AsyncStorage.getItem('data');
        console.log('Dados recuperados:', data);
        if (data !== null) {
          const parsedData = JSON.parse(data);
          console.log('Dados parseados:', parsedData);
          if (parsedData && Array.isArray(parsedData)) {
            setValorReceita(parsedData); 
            console.log('valoreceita:', parsedData);
          }
        }
      } catch (error) {
        console.log('Erro ao buscar dados:', error);
      }
    };
  
    getStoredData();
  }, []);

  useEffect(() => {
    calcularSoma();
  }, [valoreceita]);

  const saveData = async () => {
    try {
      const existingData = await AsyncStorage.getItem('data');
      const local = existingData ? JSON.parse(existingData) : [];
      const data = {
        valor: valoreceita,
        descricao: descricao,
        categoria: categoria,
        conta: conta,
      }
      local.push(data);
      await AsyncStorage.setItem('data', JSON.stringify(local));
      console.log(local);
    } catch (error) {
      console.log('Erro ao salvar:', error);
    }
  };

  async function calcularSoma() {
    try {
      if (valoreceita.length > 0) {
        const soma = valoreceita.reduce((total, receita) => total + parseFloat(receita.valoreceita), 0);
        setSomaReceitas(soma);
        console.log(soma);
      } else {
        setSomaReceitas(0); 
        console.log('Erro ao somar: Nenhum valor de receita encontrado');
      }
    } catch (error) {
      console.log('Erro ao calcular soma:', error);
    }
  }

  return (
    <ReceitasContext.Provider
      value={{
        valoreceita,
        setValorReceita,
        descricao,
        setDescricao,
        categoria,
        setCategoria,
        conta,
        setConta,
        saveData,
        somaReceitas,
        calcularSoma,
      }}
    >
      {children}
    </ReceitasContext.Provider>
  );
};