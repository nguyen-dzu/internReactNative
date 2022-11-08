/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Control, Controller, FieldValue, useForm } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import InputText from '../components/InputText';

export default function FormInput({
  rules,
  name,
  label,
  control,
  type,
  openDate,
  setOpenDate,
}: {
  type?: any;
  rules?: any;
  name?: any;
  label?: string;
  control?: any;
  openDate?: boolean;
  setOpenDate?: (openDate: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const handelOpen = () => {
    setOpen(true);
  };

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
                  <InputText
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    label={label}
                  />
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
                  <TouchableOpacity onPress={() => handelOpen()}>
                    <View pointerEvents="none">
                      <InputText
                        label={label}
                        icon="today"
                        value={moment(date).format('DD MMMM YYYY')}
                        onChangeText={onChange}
                      />
                    </View>
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
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View>
              ) : null}
            </>
          );
        }}
      />
    </View>
  );
}
