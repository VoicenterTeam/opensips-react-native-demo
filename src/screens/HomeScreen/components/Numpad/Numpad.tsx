import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Nupad.styles';

interface NumpadProps {
  onPressKey: (key: string) => void;
}

const KEYS = [
  { key: '1', sub: '' },
  { key: '2', sub: 'abc' },
  { key: '3', sub: 'def' },
  { key: '4', sub: 'jkl' },
  { key: '5', sub: 'mno' },
  { key: '6', sub: 'pqr' },
  { key: '7', sub: 'stu' },
  { key: '8', sub: 'vwz' },
  { key: '9', sub: 'yz' },
  { key: '*', sub: '' },
  { key: '0', sub: '' },
  { key: '#', sub: '' },
];

export const Numpad: React.FC<NumpadProps> = ({ onPressKey }) => {
  return (
    <View style={styles.container}>
      {KEYS.map(({ key, sub }) => (
        <TouchableOpacity
          key={key}
          style={styles.key}
          onPress={() => onPressKey(key)}
        >
          <Text style={styles.keyText}>{key}</Text>
          {sub !== '' && <Text style={styles.subText}>{sub}</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
};


