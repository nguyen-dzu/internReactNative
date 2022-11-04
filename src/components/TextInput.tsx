import React, {useRef} from 'react'
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import {Feather} from '@expo/vector-icons'
export default function ({
  label,
  error,
  touched,
  containerStyle,
  style,
  size = 'medium',
  ...others
}: TextInput['props'] & {
  label?: string
  error?: string
  touched?: boolean
  containerStyle?: View['props']['style']
  size?: 'medium' | 'small'
}) {
  const ref = useRef<TextInput>(null)

  const hasError = error && touched
  const success = touched && !hasError

  return (
    <View
      style={{
        marginVertical: 8,
      }}>
      {label ? (
        <Text
          style={{
            fontSize: 16,
            color: '#777777',
          }}>
          {label}
        </Text>
      ) : null}

      <Pressable
        style={[
          styles.input,
          size === 'small' && styles.inputSmall,
          success && styles.inputSuccess,
          hasError ? styles.inputError : null,
          others.multiline && {height: 90},
          style,
        ]}
        onPress={() => ref.current?.focus()}>
        <TextInput
          ref={ref}
          {...others}
          style={styles.formInput}
          returnKeyType={
            others.keyboardType === 'number-pad' ||
            others.keyboardType === 'numeric'
              ? 'done'
              : 'default'
          }
        />
      </Pressable>

      {hasError ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 17,
    // backgroundColor: '#F8F8F8',
  },
  inputSmall: {
    height: 40,
  },
  inputSuccess: {
    borderColor: '#00DC00',
  },
  inputError: {
    borderColor: '#FF3333',
  },
  error: {
    color: '#FF3333',
    fontSize: 12,
    marginTop: 8,
    marginHorizontal: 8,
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
})
