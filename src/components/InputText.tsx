import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputText({
  label,
  style,
  icon,
  ...others
}: TextInput['props'] & {
  icon?: React.ComponentProps<typeof Icon>['name'];
  label?: string;
}) {
  return (
    <View
      style={{
        marginVertical: 8,
      }}
    >
      {label ? (
        <Text
          style={{
            fontSize: 16,
            color: '#777777',
            marginBottom: 6,
          }}
        >
          {label}
        </Text>
      ) : null}
      <TextInput
        {...others}
        style={styles.formInput}
        returnKeyType={
          others.keyboardType === 'number-pad' ||
          others.keyboardType === 'numeric'
            ? 'done'
            : 'default'
        }
      />
      {icon && (
        <Icon
          name={icon}
          color="#999999"
          size={21}
          style={{
            position: 'absolute',
            right: 0,
            top: 35,
            marginRight: 10,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
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
    position: 'relative',
  },
});
