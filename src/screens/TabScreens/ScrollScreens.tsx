import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import { RenderItem, SafeAreaView } from '../../components';
import { ListCategories } from '../../Data/Data';
import { StackParamList } from '../../Type';
const widthScreen = Dimensions.get('window').width;
export default function ScrollScreens({
  navigation,
}: StackScreenProps<StackParamList, 'Scroll'>) {
  return (
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        {ListCategories.map((item: any, index) => {
          return (
            <View key={index} style={styles.containerContent}>
              <RenderItem item={item} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: '60%',
  },
  containerContent: {
    width: widthScreen * 0.7,
    borderWidth: 1,
    borderColor: '#777777',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
});
