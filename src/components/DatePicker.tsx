/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react'
import {Text, View} from 'react-native'
import DatePicker from 'react-native-date-picker'

export default function DatePicker({
  label,
  open,
  setOpen,
}: {
  label?: string
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const [date, setDate] = useState(new Date())
  return (
    <View>
      {label ? (
        <Text
          style={{
            fontSize: 16,
            color: '#7777777',
          }}>
          {label}
        </Text>
      ) : null}
      <DatePicker
        modal
        date={date}
        open={open}
        onConfirm={(date: React.SetStateAction<Date>) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}
