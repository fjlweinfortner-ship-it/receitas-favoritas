import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AppButton from '../components/AppButton';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { getRecipes } from '../storage/recipeStorage';

export default function RecipesListScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  async function loadRecipes() {
    const savedRecipes = await getRecipes();
    setRecipes(savedRecipes);
  }

  useFocusEffect(
    useCallback(() => {
      loadRecipes();
    }, [])
  );

  return (
    <View style={styles.screen}>
      <Header title="Receitas Favoritas" subtitle="Organize seus pratos preferidos" />

      <View style={styles.searchArea}>
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar receitas..."
          placeholderTextColor="#9A8B80"
        />

        <View style={styles.chips}>
          {['Todas', 'Doces', 'Salgadas', 'Rapidas'].map((chip, index) => (
            <TouchableOpacity key={chip} style={[styles.chip, index === 0 && styles.activeChip]}>
              <Text style={[styles.chipText, index === 0 && styles.activeChipText]}>{chip}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <RecipeCard
            recipe={item}
            onPress={() => navigation.navigate('RecipeDetails', { recipeId: item.id })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>Nenhuma receita cadastrada</Text>
            <Text style={styles.emptyText}>Toque no botao abaixo para salvar sua primeira receita.</Text>
          </View>
        }
      />

      <View style={styles.footer}>
        <AppButton title="+ Nova receita" onPress={() => navigation.navigate('RecipeForm')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF8F0'
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 112,
    flexGrow: 1
  },
  searchArea: {
    paddingHorizontal: 20,
    paddingBottom: 14
  },
  searchInput: {
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 16,
    color: '#2B2B2B',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#F0E2D6'
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12
  },
  chip: {
    height: 30,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeChip: {
    backgroundColor: '#2D6A4F'
  },
  chipText: {
    color: '#6B5E55',
    fontSize: 12,
    fontWeight: '700'
  },
  activeChipText: {
    color: '#FFFFFF'
  },
  emptyBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  emptyTitle: {
    color: '#2B2B2B',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center'
  },
  emptyText: {
    color: '#6B5E55',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8
  },
  footer: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 24
  }
});
