import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

export const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handlePress = () => {
    if (text.trim().length === 0) {
      Alert.alert('Epa parce', 'La descripción de la tarea no puede estar vacía.');
      return;
    }
    onAddTask(text);
    setText('');
  };

  return (
    <View style={styles.inputCard}>
      <TextInput
        style={styles.input}
        placeholder="Enter new task description..."
        placeholderTextColor="#ffffff"
        value={text}
        onChangeText={setText}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.8}>
        <Text style={styles.buttonText}>+ Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCard: {
    backgroundColor: '#504f4f',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#802828',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dad7d7',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#dad7d7',
    textAlignVertical: 'top',
    minHeight: 60,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#238b1f',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#dad7d7',
    fontSize: 16,
    fontWeight: '600',
  },
});