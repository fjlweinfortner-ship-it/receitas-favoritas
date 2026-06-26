import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Header({ title, subtitle, onBack }) {
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      ) : null}

      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 18,
    backgroundColor: '#FFF8F0'
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 12
  },
  backText: {
    color: '#2D6A4F',
    fontSize: 15,
    fontWeight: '700'
  },
  title: {
    color: '#2B2B2B',
    fontSize: 28,
    fontWeight: '800'
  },
  subtitle: {
    color: '#6B5E55',
    fontSize: 15,
    marginTop: 5
  }
});
