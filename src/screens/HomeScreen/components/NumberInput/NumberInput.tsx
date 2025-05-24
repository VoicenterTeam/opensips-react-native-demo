import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './NumberInput.styles';
import Delete from '@assets/icons/delete.svg'

interface NumberInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  placeholder = 'Enter number',
}) => {
  const handleChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    onChange(numericValue);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        editable={false}
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        placeholder={placeholder}
        keyboardType="numeric"
        placeholderTextColor="#A9A9A9"
      />
      <TouchableOpacity onPress={() => onChange(value.slice(0, value.length - 1))}>
        <Delete color={'#D5DBDF'}/>
      </TouchableOpacity>
    </View>
  );
};



