import React, { useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ICategories } from '../Data/DataInterface';
import ListDeparment from './ListDeparment';
import SafeAreaView from '../configs/SafeAreaView';
export default function ({ item }: { item?: ICategories }) {
  const [expand, setExpand] = useState(true);
  const handelShow = (value: any) => {
    setExpand(!expand);
  };
  return (
    <SafeAreaView>
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600' }}>
        {item?.title}
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: '#999999',
          borderRadius: 10,
          width: 100,
          marginVertical: 10,
        }}
        onPress={() => {
          handelShow(item);
        }}
      >
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          {expand ? 'hide' : 'expand'}
        </Text>
      </TouchableOpacity>
      {expand ? (
        <ScrollView>
          {item?.child.map((i: any, index) => {
            return (
              <View key={index}>
                <ListDeparment ListData={i} />
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 130,
                height: 150,
              }}
              source={require('../assets/Img/noData.png')}
            />
            <Text
              style={{
                marginVertical: 20,
              }}
            >
              No Data
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
