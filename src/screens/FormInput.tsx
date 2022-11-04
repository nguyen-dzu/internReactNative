/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react'
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import DatePicker from 'react-native-date-picker'
import * as yup from 'yup'
import moment from 'moment'
import { useForm, Controller } from 'react-hook-form'
import TextInput from '../components/TextInput'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group'
import RadioButtonsGroup from 'react-native-radio-buttons-group'
import DropDownPicker from 'react-native-dropdown-picker'
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
]
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height
export default function FormInput() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [text, onChangeText] = useState(date)
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData)
  const [openDrop, setOpenDrop] = useState(false)
  const [valueDrop, setValueDrop]: any = useState([])
  const [items, setItems]: any = useState([
    { label: 'Thợ Đụng', value: 'dung' },
    { label: 'Thợ code', value: 'code' },
    { label: 'Thợ Nê', value: 'ne' },

    { label: 'Thợ mộc', value: 'moc' },
  ])
  const changeRadio = (value: RadioButtonProps[]) => {
    setRadioButtons(value)
  }

  const { handleSubmit, control, reset } = useForm({})
  const onSubmit = (data: any) => {
    console.log(data)
    console.log('hà lô')
  }

  const schema = yup.object().shape({})
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}}>
        <Controller
          defaultValue=""
          control={control}
          render={({ onChange, value }: any) => <TextInput label="Họ Và Tên" />}
          name="FullName"
        />
        <Controller
          defaultValue=""
          control={control}
          render={({ onChange, value }: any) => (
            <TouchableOpacity onPress={() => setOpen(true)}>
              <View pointerEvents="none">
                <TextInput
                  label="Ngày Sinh"
                  icon="today"
                  value={moment(text).format('DD MMMM YYYY')}
                  onChangeText={() => onChangeText(date)}
                />
              </View>
            </TouchableOpacity>
          )}
          name="BirthDay"
        />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            onChangeText(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
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
        <Controller
          defaultValue=""
          control={control}
          render={({ onChange, value }: any) => (
            <TextInput label="Số CMND" keyboardType="number-pad" />
          )}
          name="Idcard"
        />
        <Controller
          defaultValue=""
          control={control}
          render={({ onChange, value }: any) => (
            <TextInput label="Số điện thoại" keyboardType="number-pad" />
          )}
          name="PhoneNumber"
        />
        <Controller
          defaultValue=""
          control={control}
          render={({ onChange, value }: any) => (
            <TextInput label="Email" keyboardType="email-address" />
          )}
          name="Email"
        />
      </ScrollView>
      <Controller
        defaultValue=""
        control={control}
        render={({ onChange, value }: any) => (
          <>
            <Text style={styles.text}>Nghề Nghiệp</Text>
            <DropDownPicker
              open={openDrop}
              value={valueDrop}
              items={items}
              setOpen={setOpenDrop}
              setValue={setValueDrop}
              setItems={setItems}
              dropDownDirection="TOP"
            />
          </>
        )}
        name="Occupation"
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
  )
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
})
