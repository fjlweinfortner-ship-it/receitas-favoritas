import React, { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AppButton from '../components/AppButton';
import Header from '../components/Header';
import { deleteRecipe, getRecipeById } from '../storage/recipeStorage';

const detailImage = 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800';

export default function RecipeDetailsScreen({ navigation, route }) {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);

  async function loadRecipe() {
    const selectedRecipe = await getRecipeById(recipeId);
    setRecipe(selectedRecipe);
  }

  useFocusEffect(
    useCallback(() => {
      loadRecipe();
    }, [recipeId])
  );

  function handleDelete() {
    Alert.alert('Excluir receita?', 'Essa acao nao pode ser desfeita.', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          await deleteRecipe(recipeId);
          navigation.navigate('RecipesList');
        }
      }
    ]);
  }

  if (!recipe) {
    return (
      <View style={styles.screen}>
        <Header title="Receita" onBack={() => navigation.goBack()} />
        <Text style={styles.loading}>Receita nao encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Header
        title={recipe.name}
        subtitle={`Tempo de preparo: ${recipe.preparationTime}`}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Image style={styles.heroImage} source={{ uri: detailImage }} />

        <View style={styles.infoRow}>
          <Text style={styles.infoBadge}>🕒 {recipe.preparationTime}</Text>
          <Text style={styles.infoBadge}>🍽 Receita</Text>
          <Text style={styles.infoBadge}>★ Favorita</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredientes</Text>
          <Text style={styles.sectionText}>{recipe.ingredients}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Modo de preparo</Text>
          <Text style={styles.sectionText}>{recipe.preparation}</Text>
        </View>

        <AppButton
          title="Editar"
          variant="secondary"
          onPress={() => navigation.navigate('RecipeForm', { recipeId })}
        />
        <AppButton title="Excluir" variant="danger" onPress={handleDelete} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF8F0'
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 34
  },
  heroImage: {
    width: '100%',
    height: 210,
    borderRadius: 22,
    backgroundColor: '#F2DED1',
    marginBottom: 14
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14
  },
  infoBadge: {
    backgroundColor: '#FFFFFF',
    color: '#2D6A4F',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12,
    fontWeight: '800'
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 2
  },
  sectionTitle: {
    color: '#2D6A4F',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 8
  },
  sectionText: {
    color: '#2B2B2B',
    fontSize: 16,
    lineHeight: 23
  },
  loading: {
    color: '#6B5E55',
    fontSize: 16,
    paddingHorizontal: 20
  }
});
