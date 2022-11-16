import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, ScrollView, FlatList, View } from 'react-native';
import { RenderItem, SafeAreaView } from '../../components';
import { ListCategories } from '../../Data/Data';
import { StackParamList } from '../../Type';
export default function FlatListItem({
  navigation,
}: StackScreenProps<StackParamList, 'FlatList'>) {
  const reRenderItem = ({ item }: any) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
          padding: 20,
        }}
      >
        <RenderItem item={item} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={ListCategories}
        renderItem={reRenderItem}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
}
