import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

import Home from './src/Home';
import Transacoes from './src/Transacoes';
import Cartoes from './src/Cartoes';
import Opcoes from './src/Opcoes';

const CircleButton = ({ onPress }) => (
  <TouchableOpacity style={styles.circleButton} onPress={onPress}>
    <View style={styles.circle} />
  </TouchableOpacity>
);

export default function App() {
  
  const Tab = createBottomTabNavigator();

  const [showMoreBalls, setShowMoreBalls] = useState(false);

  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70, // Ajusta a altura do tab bar
            backgroundColor: '#2C3E50',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: 'center', // Alinha os itens ao centro
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
                <CircleButton />
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

      {/* Bolas extras */}
      {showMoreBalls && (
        <View style={styles.extraBallsContainer}>
          <View style={styles.halfCircle} />
          <View style={styles.halfCircle} />
          <View style={styles.halfCircle} />
        </View>
      )} 
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  circleButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980B9',
    borderRadius: 35,
    marginBottom: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
  },
  extraBallsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 150, // Ajusta a posição vertical das bolas extras
    alignSelf: 'center', // Alinha as bolas extras ao centro horizontalmente
  },
  halfCircle: {
    width: 40,
    height: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#2980B9',
    transform: [{ rotate: '180deg' }],
  },
});
