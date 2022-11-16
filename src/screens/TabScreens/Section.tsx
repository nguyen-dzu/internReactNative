import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, SectionList, View } from 'react-native';
import { RenderItem, SafeAreaView } from '../../components';
import storage from '../../configs/storage';
import { ListCategories } from '../../Data/Data';
import { StackParamList } from '../../Type';

export default function Section({
  navigation,
}: StackScreenProps<StackParamList, 'Scroll'>) {
  const reRenderItem = ({ section }: any) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          borderWidth: 1,
          borderRadius: 10,
          padding: 20,
        }}
      >
        <RenderItem item={section} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <SectionList
        horizontal
        sections={ListCategories}
        renderItem={reRenderItem}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
}
