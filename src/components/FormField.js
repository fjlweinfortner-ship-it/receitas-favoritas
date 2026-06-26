import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function FormField({ label, value, onChangeText, placeholder, multiline }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A28F82"
        multiline={multiline}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  label: {
    color: '#2B2B2B',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 7
  },
  input: {
    minHeight: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F2DED1',
    paddingHorizontal: 14,
    color: '#2B2B2B',
    fontSize: 16
  },
  textArea: {
    minHeight: 118,
    paddingTop: 14
  }
});
