import React, { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './AuthInput.styles';

interface AuthInputProps {
    label: string
    value: string
    onChangeText: (text: string) => void
}

export const AuthInput:FC<AuthInputProps> = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} numberOfLines={1} value={value} onChangeText={onChangeText} />
    </View>
  );
};
