import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const recipeImages = [
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300'
];

function getImage(recipe) {
  const index = Number(recipe.id.slice(-1)) || 0;
  return recipeImages[index % recipeImages.length];
}

export default function RecipeCard({ recipe, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={{ uri: getImage(recipe) }} />

      <View style={styles.content}>
        <Text style={styles.name}>{recipe.name}</Text>
        <Text style={styles.category}>Receita favorita</Text>
        <Text style={styles.time}>🕒 {recipe.preparationTime}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 92,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 14,
    marginRight: 12,
    backgroundColor: '#F2DED1'
  },
  content: {
    flex: 1
  },
  name: {
    color: '#2B2B2B',
    fontSize: 15,
    fontWeight: '800'
  },
  category: {
    color: '#8C7C70',
    fontSize: 12,
    marginTop: 3
  },
  time: {
    color: '#2D6A4F',
    fontSize: 12,
    marginTop: 6,
    fontWeight: '700'
  },
  arrow: {
    color: '#E85D04',
    fontSize: 32,
    marginLeft: 10
  }
});
