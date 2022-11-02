import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screen/login'
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './context/auth';
import AuthProvider from './context/auth';
import Routes from './Routes';

export default function App() {
  const [loged, setLog] = useState(false);
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

