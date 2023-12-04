import React from 'react'
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';

const ToDoList = () => {
  return (
      <ScrollView> 
        
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do Laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to the gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk the dog</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Work on assignment</Text>
          </View>
        </Pressable>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    task: {
      padding: 15,
      borderBottomWidth: 2,
      borderColor: '#aaa',
      backgroundColor: '#FF69B4', 
    },
    completed: {
      backgroundColor: '#FFC0CB', 
    },
    taskText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
  });


export default ToDoList