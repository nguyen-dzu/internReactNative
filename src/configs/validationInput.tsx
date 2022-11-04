import React from 'react'
import * as Yup from 'yup'
import Regex from './Regex'

export const defaultInput = {
  fullName: {
    min: 12,
    max: 255,
  },
  idCard: {
    min: 9,
    max: 15,
  },
  birthDay: {
    min: 13,
    max: 64,
  },
  text: {
    invalid: (title: string) => `${title} không hợp lệ`,
    empty: (title: string) => `${title} không được để trống`,
    min: (title: string, number: number) =>
      `${title} phải tối thiểu ${number} ký tự`,
    max: (title: string) => `${title} quá dài`,
    notMatch: (title: string) => `${title} không trùng khớp`,
  },
}

const { fullName, idCard, birthDay, text } = defaultInput

export const validation = {
  emailAddress: (title: string) =>
    Yup.string().email(text.invalid(title)).required(text.empty(title)),
  phoneNumber: (title: string) =>
    Yup.string()
      .matches(Regex.vietnamPhoneNumber, text.invalid(title))
      .required(text.invalid(title)),
  fullName: (title: string) =>
    Yup.string()
      .min(fullName.min, text.min(title, fullName.min))
      .max(fullName.max, text.max(title))
      .required(text.empty(title)),
}
