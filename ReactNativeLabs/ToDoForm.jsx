import React from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#999" // Lighter text color for placeholder
      />
      <Pressable style={styles.addButton}>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#FF69B4',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ToDoForm;
