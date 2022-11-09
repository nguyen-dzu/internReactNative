/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState, useRef } from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import {
  Control,
  Controller,
  FieldValue,
  FieldValues,
  useForm,
  UseFormSetValue,
} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import InputText from '../components/InputText';
import RadioButtonsGroup, {
  RadioButtonProps,
} from 'react-native-radio-buttons-group';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from './Colors';
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
export default function ({
  rules,
  name,
  label,
  control,
  type,
  setValue,
  keyboardType,
  placeholder,
}: {
  type?: any;
  rules?: any;
  name?: any;
  label?: string;
  control?: any;
  setValue?: any;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: any;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);
  const handelOpen = () => {
    setOpen(true);
  };
  const ref = useRef<TextInput>(null);
  const changeRadio = (value: RadioButtonProps[]) => {
    setRadioButtons(value);
    value.filter((item, index) => {
      if (item.selected) setValue(name, item.value);
    });
  };
  const [openDrop, setOpenDrop] = useState(false);
  const [valueDrop, setValueDrop]: any = useState([]);
  const [items, setItems]: any = useState([
    { label: 'Thợ Đụng', value: 'dung' },
    { label: 'Thợ code', value: 'code' },
    { label: 'Thợ Nê', value: 'ne' },

    { label: 'Thợ mộc', value: 'moc' },
  ]);
  return (
    <View>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => {
          return (
            <>
              {type == 'input' ? (
                <>
                  {label ? (
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#777777',
                        marginBottom: 8,
                      }}
                    >
                      {label}
                    </Text>
                  ) : null}
                  <Pressable
                    style={[
                      styles.input,
                      value && styles.inputSuccess,
                      error ? styles.inputError : null,
                    ]}
                    onPress={() => ref.current?.focus()}
                  >
                    <InputText
                      placeholder={placeholder}
                      keyboardType={keyboardType}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </Pressable>
                  <Text
                    key={error?.type}
                    style={{
                      color: '#F44336',
                    }}
                  >
                    {error?.message}
                  </Text>
                </>
              ) : type == 'datePicker' ? (
                <View>
                  {label ? (
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#777777',
                        marginBottom: 8,
                      }}
                    >
                      {label}
                    </Text>
                  ) : null}
                  <TouchableOpacity onPress={() => handelOpen()}>
                    <Pressable
                      style={[
                        styles.input,
                        value && styles.inputSuccess,
                        error ? styles.inputError : null,
                      ]}
                      onPress={() => ref.current?.focus()}
                    >
                      <View pointerEvents="none">
                        <InputText
                          placeholder={placeholder}
                          icon="today"
                          value={moment(date).format('DD MMMM YYYY')}
                          onChangeText={onChange}
                        />
                      </View>
                    </Pressable>
                  </TouchableOpacity>
                  <Text
                    key={error?.type}
                    style={{
                      color: '#F44336',
                    }}
                  >
                    {error?.message}
                  </Text>
                  <DatePicker
                    modal
                    mode="date"
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                      setOpen(false);
                      setDate(date);
                      setValue(name, date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View>
              ) : type == 'RadioButton' ? (
                <>
                  {label ? (
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#777777',
                        marginBottom: 8,
                      }}
                    >
                      {label}
                    </Text>
                  ) : null}
                  <RadioButtonsGroup
                    layout="row"
                    radioButtons={radioButtons}
                    onPress={changeRadio}
                  />
                </>
              ) : type == 'dropdown' ? (
                <>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#777777',
                      marginBottom: 8,
                    }}
                  >
                    {label}
                  </Text>
                  <DropDownPicker
                    open={openDrop}
                    value={valueDrop}
                    items={items}
                    setOpen={setOpenDrop}
                    setValue={setValueDrop}
                    setItems={setItems}
                    onChangeValue={() => setValue(name, valueDrop)}
                    dropDownDirection="TOP"
                  />
                </>
              ) : null}
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  errors: {
    borderColor: '#F44336',
    borderWidth: 1,
  },
  success: {
    borderColor: '#00DC00',
    borderWidth: 1,
  },
  inputSuccess: {
    borderColor: Colors.success,
  },
  inputError: {
    borderColor: Colors.error,
  },
  input: {
    borderRadius: 5,
    height: 40,
    borderWidth: 1,
    // backgroundColor: '#F8F8F8',
  },
});
