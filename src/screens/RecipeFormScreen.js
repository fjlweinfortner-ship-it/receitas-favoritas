import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text } from 'react-native';

import AppButton from '../components/AppButton';
import FormField from '../components/FormField';
import Header from '../components/Header';
import { getRecipeById, saveRecipe, updateRecipe } from '../storage/recipeStorage';

export default function RecipeFormScreen({ navigation, route }) {
  const recipeId = route.params?.recipeId;
  const isEditing = Boolean(recipeId);

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadRecipe() {
      if (!recipeId) return;

      const recipe = await getRecipeById(recipeId);
      if (!recipe) return;

      setName(recipe.name);
      setIngredients(recipe.ingredients);
      setPreparation(recipe.preparation);
      setPreparationTime(recipe.preparationTime);
    }

    loadRecipe();
  }, [recipeId]);

  function validateRecipe() {
    // AJUSTADO MANUALMENTE: validacao simples para impedir cadastro vazio.
    if (!name.trim()) return 'Informe o nome da receita.';
    if (!preparationTime.trim()) return 'Informe o tempo de preparo.';
    if (!ingredients.trim()) return 'Informe os ingredientes.';
    if (!preparation.trim()) return 'Informe o modo de preparo.';
    return '';
  }

  async function handleSave() {
    const validationError = validateRecipe();
    if (validationError) {
      setError(validationError);
      return;
    }

    const recipeData = {
      name: name.trim(),
      ingredients: ingredients.trim(),
      preparation: preparation.trim(),
      preparationTime: preparationTime.trim()
    };

    if (isEditing) {
      await updateRecipe(recipeId, recipeData);
      Alert.alert('Pronto', 'Receita atualizada com sucesso.');
      navigation.navigate('RecipeDetails', { recipeId });
      return;
    }

    await saveRecipe(recipeData);
    Alert.alert('Pronto', 'Receita cadastrada com sucesso.');
    navigation.navigate('RecipesList');
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header
        title={isEditing ? 'Editar receita' : 'Nova receita'}
        subtitle="Preencha os dados principais"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <FormField
          label="Nome da receita"
          value={name}
          onChangeText={setName}
          placeholder="Ex: Bolo de cenoura"
        />

        <FormField
          label="Tempo de preparo"
          value={preparationTime}
          onChangeText={setPreparationTime}
          placeholder="Ex: 45 min"
        />

        <FormField
          label="Ingredientes"
          value={ingredients}
          onChangeText={setIngredients}
          placeholder="Liste os ingredientes da receita"
          multiline
        />

        <FormField
          label="Modo de preparo"
          value={preparation}
          onChangeText={setPreparation}
          placeholder="Descreva o passo a passo"
          multiline
        />

        <AppButton title={isEditing ? 'Salvar alteracoes' : 'Salvar receita'} onPress={handleSave} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF8F0'
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32
  },
  error: {
    color: '#C1121F',
    backgroundColor: '#FFE5E8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    fontWeight: '700'
  }
});
