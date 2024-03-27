import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Transacoes from './Transacoes';
import Cartoes from './Cartoes';
import Opcoes from './Opcoes';
import { UserContext } from './Context/UserContext';
import React, { useContext, useState } from 'react'; 
import Login from './Login';

const Tab = createBottomTabNavigator();

const CircleButton = ({ onPress }) => (
    <TouchableOpacity style={styles.circleButton} onPress={onPress}>
      <MaterialCommunityIcons name="axis" size={25}/>
    </TouchableOpacity>
  );

export default function Rotas() {

  const [showMoreBalls, setShowMoreBalls] = useState(false);

  const toggleBalls = () => {
    setShowMoreBalls(!showMoreBalls);
  };

  const {logado} = useContext( UserContext );

  if( logado == false ) {
    return( <Login />)
  }


    return (
        <NavigationContainer>
        <Tab.Navigator
           screenOptions={{
             tabBarStyle: {
               height: 70, 
               backgroundColor: '#2C3E50',
               borderTopLeftRadius: 10,
               borderTopRightRadius: 10,
               justifyContent: 'center', 
             },
           }}
         >
           <Tab.Screen
             name="Home"
             component={Home}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="home" color={color} size={size} />
               ),
             }}
           />
           <Tab.Screen
             name="Transações"
             component={Transacoes}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
               ),
             }}
           />
           <Tab.Screen
             name="Botao"
             component={CircleButton}
             options={{
               tabBarButton: ({ onPress }) => (
                 <TouchableOpacity onPress={onPress}>
                   <CircleButton onPress={toggleBalls} />
                 </TouchableOpacity>
               ),
             }}
           />
           <Tab.Screen
             name="Cartões"
             component={Cartoes}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="credit-card" color={color} size={size} />
               ),
             }}
           />
           <Tab.Screen
             name="Opções"
             component={Opcoes}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="cogs" color={color} size={size} />
               ),
             }}
           />
         </Tab.Navigator>
   
  
         {showMoreBalls && (
           <View style={styles.extraBallsContainer}>
             <View style={styles.halfCircle} />
             <View style={styles.espaço} />
             <View style={styles.halfCircle} />
             <View style={styles.espaço} />
             <View style={styles.halfCircle} />
           </View>
         )} 
         
       </NavigationContainer>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    circleButton: {
      width: 55,
      height: 55,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2980B9',
      borderRadius: 35,
      marginBottom: 20,
      top: '-30%'
    },
    circle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#FFF',
    },
    extraBallsContainer: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-around',
      position: 'absolute',
      bottom: 100, 
      alignSelf: 'center', 
    },
    halfCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#2980B9',
    },
    espaço: {
      width: 20
    }
  }); 