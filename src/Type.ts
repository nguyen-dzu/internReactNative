import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps as RNStackScreenProps,
} from '@react-navigation/stack';
import { ICategories } from './Data/DataInterface';

export type INavigation = StackNavigationProp<StackParamList, any>;

export type MainStackParamList = {
  Tab: undefined;
  MainScreens: undefined;
};

export type StackParamList = MainStackParamList & MainTabParamList;

export interface StackScreenProps {
  component: React.FC<any>;
  options?:
    | StackNavigationOptions
    | ((props: { navigation: any }) => StackNavigationOptions);
}
export interface ITab {
  name: keyof MainTabParamList;
  component: any;
  options?: BottomTabNavigationOptions;
  iconNoti?: any;
}
export type MainTabParamList = {
  Scroll: [ICategories];
  FlatList: [ICategories];
  Section: [ICategories];
};

export type RootStackScreenProps<
  T extends keyof (MainStackParamList & MainTabParamList),
> = RNStackScreenProps<MainStackParamList & MainTabParamList, T>;

export interface IStackScreen extends StackScreenProps {
  name: keyof MainStackParamList;
}
export interface BottomTabProps {
  name: keyof MainTabParamList;
  title?: string;
  component: React.FC<any>;
  options?: BottomTabNavigationOptions;
}
declare global {
  namespace ReactNavigation {
    interface MainParamList extends MainStackParamList {}
  }
}

export type StorageParamList = {
  DataForm: undefined;
};
