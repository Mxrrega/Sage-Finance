import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DespesasContext = createContext();

export const DespesasProvider = ({ children }) => {
  
  const [valordespesa, setValorDespesa] = useState([]); 
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [conta, setConta] = useState('');
  const [somaDespesa, setSomaDespesa] = useState(0);

  useEffect(() => {
    const getStoredDataD = async () => {
      try {
        const dataD = await AsyncStorage.getItem('dataD');
        console.log('Dados recuperados:', dataD);
        if (dataD !== null) {
          const parsedData = JSON.parse(dataD);
          console.log('Dados parseados:', parsedData);
          if (parsedData && Array.isArray(parsedData)) {
            setValorDespesa(parsedData); 
            console.log('valordespesa:', parsedData);
          }
        }
      } catch (error) {
        console.log('Erro ao buscar dados:', error);
      }
    };
  
    getStoredDataD();
  }, []);

  useEffect(() => {
    calcularSoma();
  }, [valordespesa]);

  const saveDataD = async () => {
    try {
      const existingData = await AsyncStorage.getItem('dataD');
      const local = existingData ? JSON.parse(existingData) : [];
      const dataD = {
        valor: valordespesa,
        descricao: descricao,
        categoria: categoria,
        conta: conta,
      }
      local.push(dataD);
      await AsyncStorage.setItem('dataD', JSON.stringify(local));
      console.log(local);
    } catch (error) {
      console.log('Erro ao salvar:', error);
    }
  };

  async function calcularSoma() {
    try {
      if (valordespesa.length > 0) {
        const soma = valordespesa.reduce((total, despesa) => total + parseFloat(despesa.valordespesa), 0);
        setSomaDespesa(soma);
        console.log(soma);
      } else {
        setSomaDespesa(0); 
        console.log('Erro ao somar: Nenhum valor de Despesa encontrado');
      }
    } catch (error) {
      console.log('Erro ao calcular soma:', error);
    }
  }

  return (
    <DespesasContext.Provider
      value={{
        valordespesa,
        setValorDespesa,
        descricao,
        setDescricao,
        categoria,
        setCategoria,
        conta,
        setConta,
        saveDataD,
        somaDespesa,
        calcularSoma,
      }}
    >
      {children}
    </DespesasContext.Provider>
  );
};