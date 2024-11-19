import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Screen } from 'react-native-screens';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home';
import AddExpenses from '../screens/addExpenses';
import ExpensesList from '../screens/expenseList';
const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} 
        />
        <Stack.Screen name= "HomeScreen" component={HomeScreen}/>
        <Stack.Screen name = "AddExpenses"  component={AddExpenses}/>
        <Stack.Screen name = "ExpenseList" component={ExpensesList}/>
    </Stack.Navigator>
   </NavigationContainer>
    
  )
}

export default RootNavigation
