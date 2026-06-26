import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AppButton({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity style={[styles.button, styles[variant]]} onPress={onPress}>
      <Text style={[styles.text, variant !== 'primary' && styles.darkText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginTop: 8
  },
  primary: {
    backgroundColor: '#E85D04'
  },
  secondary: {
    backgroundColor: '#D8F3DC'
  },
  danger: {
    backgroundColor: '#FFE5E8'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800'
  },
  darkText: {
    color: '#2B2B2B'
  }
});
