import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ITab, MainStackParamList, StackParamList } from '../Type';
import ScrollScreens from '../screens/TabScreens/ScrollScreens';
import Flatlist from '../screens/TabScreens/Flatlist';
import Section from '../screens/TabScreens/Section';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { Colors } from '../configs';
import { useColorScheme, View } from 'react-native';
const BottomTab = createBottomTabNavigator<StackParamList>();
const screens: ITab[] = [
  {
    name: 'Scroll',
    component: ScrollScreens,
    options: {
      title: 'ScrollView',
      tabBarIcon: ({ color }) => (
        <View>
          <Icon name="dedent" size={20} color={color} />
        </View>
      ),
    },
  },
  {
    name: 'FlatList',
    component: Flatlist,
    options: {
      title: 'FlatList',
      tabBarIcon: ({ color }) => (
        <View>
          <Icon name="dedent" size={20} color={color} />
        </View>
      ),
    },
  },
  {
    name: 'Section',
    component: Section,
    options: {
      title: 'Section List',
      tabBarIcon: ({ color }) => (
        <View>
          <Icon name="dedent" size={20} color={color} />
        </View>
      ),
    },
  },
];
// const Stack = createStackNavigator<StackParamList>();

export default function TabNavigation({}: StackScreenProps<
  MainStackParamList,
  'Tab'
>) {
  // const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Scroll"
      screenOptions={{
        tabBarActiveTintColor: Colors.tintTab,
        tabBarInactiveTintColor: '#E0E0E0',
        tabBarLabelStyle: [{ color: '#444444', fontSize: 12, height: 24 }],
      }}
    >
      {screens.map((screen) => (
        <BottomTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={() => ({
            ...screen.options,
          })}
        />
      ))}
    </BottomTab.Navigator>
  );
}
