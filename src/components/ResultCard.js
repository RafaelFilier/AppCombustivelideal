import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultCard(props) {
  return (
    <View style={styles.card}>
      {/* Corrigido para props.recomendacao */}
      <Text style={styles.title}>Abasteça com: {props.recomendacao}</Text>
      {/* Corrigido para props.porcentagem */}
      <Text style={styles.description}>
        O etanol está custando {props.porcentagem}% da gasolina.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#E8F4F8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#B6D4DF',
    alignItems: 'center',
    width: '75%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});