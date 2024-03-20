import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './src/Home';
import Transacoes from './src/Transacoes';
import Cartoes from './src/Cartoes';
import Opcoes from './src/Opcoes';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Transações" component={Transacoes} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Cartões" component={Cartoes} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="credit-card" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Opções" component={Opcoes} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cogs" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
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
  
});
