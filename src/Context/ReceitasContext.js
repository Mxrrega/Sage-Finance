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
        console.log( data );
        if (data !== null) {
          const parsedData = JSON.parse(data);
          if (parsedData && Array.isArray(parsedData.valoreceita)) {
            setValorReceita(parsedData.valoreceita); 
            console.log(valoreceita)
          }
        }
        console.log(data)
      } catch (error) {
        console.log('Erro buscar dados', error);
      }
    };

    getStoredData();
  }, []);

  useEffect(() => {
    calcularSoma();
  }, [valoreceita]);

  async function saveData() 
  {
    try {
      const local = await AsyncStorage.getItem('data') || [];
      const data = { valoreceita: valoreceita, descricao: descricao, categoria: categoria, conta: conta };
      const save = [ ...local, data ];
      await AsyncStorage.setItem('data', JSON.stringify( save ) );
      console.log(save);
    } catch (error) {
      console.log('Erro ao salvar:', error);
    }
  };
  async function calcularSoma()
  {
    if (valoreceita.length > 0) {
      const soma = valoreceita.reduce((total, receita) => total + parseFloat(receita.valor), 0);
      setSomaReceitas(soma);
      console.log(somaReceitas)
    } else {
      setSomaReceitas(1); 
      console.log('Erro ao somar')
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