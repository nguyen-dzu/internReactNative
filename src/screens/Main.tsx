/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { useForm, Controller } from 'react-hook-form';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import RadioButtonsGroup from 'react-native-radio-buttons-group';
import FormInput from '../configs/FormInput';
import Regex from '../configs/Regex';
import { StackParamList } from '../Type';
import { StackScreenProps } from '@react-navigation/stack';
import storage from '../configs/storage';
import Navigation from '../navigation';

const widthScreen = Dimensions.get('window').width;
export default function Main({
  navigation,
}: StackScreenProps<StackParamList, 'MainScreens'>) {
  const { handleSubmit, control, setValue } = useForm();
  const onSubmit = (data: any) => {
    if (data) navigation.navigate('Tab');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FormInput
          type="input"
          control={control}
          name="fullName"
          label="Họ Và Tên*"
          placeholder="Nguyễn Văn A"
          rules={{
            required: 'Vui Lòng Nhập Vào Họ Và Tên',
            maxLength: {
              value: 255,
              message: 'Họ Và Tên phải dưới 255 kí tự',
            },
            minLength: {
              value: 12,
              message: 'Họ Và Tên phải trên 12 ký tự',
            },
          }}
        />
        <FormInput
          type="datePicker"
          control={control}
          name="birthday"
          label="Ngày Sinh*"
          setValue={setValue}
          rules={{
            required: 'Vui Lòng Nhập Vào Ngày Sinh',
            min: {
              value: 13,
              message: 'Bạn phải trên 13 tuổi',
            },
            max: {
              value: 65,
              message: 'Bạn phải dưới 65 tuổi',
            },
          }}
        />
        <FormInput
          type="RadioButton"
          control={control}
          name="gender"
          label="Giới tính"
          setValue={setValue}
        />
        <FormInput
          type="input"
          control={control}
          name="idCard"
          keyboardType="number-pad"
          label="CMND*"
          placeholder="XXX XXX XXX"
          rules={{
            required: 'Vui Lòng Nhập Vào CMND',
            pattern: {
              value: /\d+/,
              message: 'Vui Lòng Chỉ Nhập Vào Số.',
            },
            maxLength: {
              value: 15,
              message: 'CMND phải dưới 15 kí tự',
            },
            minLength: {
              value: 9,
              message: 'CMND phải trên 9 ký tự',
            },
          }}
        />
        <FormInput
          type="input"
          control={control}
          name="PhoneNumber"
          keyboardType="number-pad"
          label="Số Điện Thoại"
          placeholder="+84 XXX XXX XXX"
          rules={{
            pattern: {
              value: Regex.vietnamPhoneNumber,
              message: 'Số Điện Thoại Không Hợp Lệ',
            },
          }}
        />
        <FormInput
          type="input"
          control={control}
          name="Email"
          label="Email*"
          rules={{
            pattern: {
              value: Regex.EmailValid,
              message: 'email Không Hợp Lệ',
            },
          }}
        />
      </ScrollView>
      <FormInput
        setValue={setValue}
        type="dropdown"
        control={control}
        name="Occupation"
        label="Nghề Nghiệp"
      />

      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
        }}
      >
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#ffffff',
            }}
          >
            Chọn
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  buttonSubmit: {
    height: 40,
    width: widthScreen * 0.25,
    backgroundColor: '#F4A31E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
