import React, { useContext } from 'react';
import Login from '../screen/login';
import Task from '../screen/task';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Routes({}) {
	return(
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name='Task' component={Task}/>
		</Stack.Navigator>
	);
};