/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react'
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import TextInput from '../components/TextInput'
import {Formik} from 'formik'
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group'
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
const dropdownData = [
  {
    label: 'IT',
    value: 'it',
  },
  {
    label: 'Nông Dân',
    value: 'farmers',
  },
  {
    label: 'Nhân viên văn phòng',
    value: 'office_staff',
  },
]
export default function FormInput() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [text, onChangeText] = useState(date)
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData)

  const [openDropDown, setOpenDropDown] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState(dropdownData)
  const changeRadio = (value: RadioButtonProps[]) => {
    setRadioButtons(value)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TextInput label="Họ Và Tên" />
        <TextInput
          value={moment(text).format('DD MMMM YYYY')}
          label="Ngày Sinh"
          onPressIn={() => setOpen(true)}
          onChangeText={() => onChangeText}
        />
        <DatePicker
          modal
          date={date}
          open={open}
          onConfirm={date => {
            setOpen(false)
            setDate(date)
            onChangeText(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        <RadioGroup
          layout="row"
          radioButtons={radioButtons}
          onPress={changeRadio}
        />
        <TextInput label="Số CMND" keyboardType="number-pad" />
        <TextInput label="Số Điện Thoại" keyboardType="number-pad" />
        <TextInput label="Email" keyboardType="email-address" />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
})
