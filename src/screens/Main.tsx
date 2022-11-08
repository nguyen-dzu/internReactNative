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
const radioButtonsData = [
  {
    id: '1',
    label: 'Nam',
    value: 'male',
  },
  {
    id: '2',
    label: 'Nữ',
    value: 'female',
  },
  {
    id: '3',
    label: 'Khác',
    value: 'other',
  },
];
const widthScreen = Dimensions.get('window').width;
export default function Main() {
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);
  const [openDrop, setOpenDrop] = useState(false);
  const [valueDrop, setValueDrop]: any = useState([]);
  const [items, setItems]: any = useState([
    { label: 'Thợ Đụng', value: 'dung' },
    { label: 'Thợ code', value: 'code' },
    { label: 'Thợ Nê', value: 'ne' },

    { label: 'Thợ mộc', value: 'moc' },
  ]);
  const { handleSubmit, control, setValue } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const changeRadio = (value: RadioButtonProps[]) => {
    setRadioButtons(value);
    value.filter((item, index) => {
      if (item.selected) setValue('Gender', item.value);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FormInput
          type="input"
          control={control}
          name="fullName"
          label="Họ Và Tên*"
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
          rules={{
            required: 'Vui Lòng Nhập Vào Ngày Sinh',
          }}
        />
        {/* 
        <Controller
          defaultValue=""
          control={control}
          render={({ onChange, value }: any) => (
            <>
              <Text style={styles.text}>Giới Tính</Text>
              <RadioButtonsGroup
                layout="row"
                radioButtons={radioButtons}
                onPress={changeRadio}
              />
            </>
          )}
          name="Gender"
        />
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 15,
              minLength: 9,
            }}
            name="idCard"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
                label="Số CMND*"
              />
            )}
          />
          {errors.idCard && (
            <Text
              style={{
                color: '#FF3333',
              }}
            >
              Nhập vào CMND của bạn
            </Text>
          )}
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 15,
              minLength: 9,
            }}
            name="PhoneNumber"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
                textContentType="telephoneNumber"
                label="Số Điện Thoại"
              />
            )}
          />
          {errors.PhoneNumber && (
            <Text
              style={{
                color: '#FF3333',
              }}
            >
              Nhập vào SĐT của bạn
            </Text>
          )}
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                label="Email"
              />
            )}
          />
          {errors.email && (
            <Text
              style={{
                color: '#FF3333',
              }}
            >
              Nhập vào SĐT của bạn
            </Text>
          )}
        </View> */}
      </ScrollView>

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
  text: {
    fontSize: 16,
    color: '#777777',
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
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
    borderColor: '#999999',
  },
});
