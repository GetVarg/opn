import React, { useContext } from 'react';
import Login from '../screen/login';
import Task from '../screen/task';

import AuthContext from '../context/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function Routes({}) {
	return(
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login}/>
			<Stack.Screen name='task' component={Task}/>
		</Stack.Navigator>
	);
};