import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ICategories, IDepartment } from '../Data/DataInterface';
export default function ListDeparment({ ListData }: { ListData: any }) {
  const [expand, setExpand] = useState(false);
  const [childed, setChilded]: any = useState([]);
  function handelShowChild(params: any, e: number) {
    setExpand(!expand);
    setChilded(params);
  }
  return (
    <View>
      {ListData.data.map((data: any, index: number) => {
        return (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#999999',
              borderRadius: 10,
              marginVertical: 10,
            }}
            key={index}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                source={
                  data.img ? data.img : require('../assets/Img/banner1.jpg')
                }
                style={{
                  width: 100,
                  height: 60,
                  margin: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                  }}
                >
                  {data.name}
                </Text>
                <Text>{data.desc}</Text>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: '#999999',
                    borderRadius: 10,
                    width: 100,
                    margin: 10,
                  }}
                  onPress={() => handelShowChild(data, index)}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                    }}
                  >
                    {expand ? 'hide' : 'expand'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView>
              {expand ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 30,
                    borderWidth: 1,
                    borderColor: '#777777',
                    borderRadius: 10,
                    marginVertical: 5,
                    marginRight: 5,
                  }}
                >
                  <Image
                    source={
                      childed.img
                        ? childed.img
                        : require('../assets/Img/banner1.jpg')
                    }
                    style={{
                      width: 100,
                      height: 60,
                      margin: 10,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                      }}
                    >
                      {childed.name}
                    </Text>
                    <Text>{childed.desc}</Text>
                  </View>
                </View>
              ) : null}
            </ScrollView>
          </View>
        );
      })}
    </View>
  );
}
