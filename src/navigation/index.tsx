import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import storage from '../configs/storage';
import Main from '../screens/Main';
import { StackParamList } from '../Type';
import TabNavigation from './TabNavigation';

export default function Navigation() {
  const Stack = createStackNavigator<StackParamList>();
  const [reponse, setReponse] = useState();
  useEffect(() => {
    // async function getData() {
    //   const data = await storage.get('DataForm');
    //   setReponse(data);
    //   console.log(data);
    // }
    // getData();
  }, [reponse]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="MainScreens" component={Main} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
