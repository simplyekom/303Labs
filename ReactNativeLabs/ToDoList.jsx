import React from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image } from 'react-native';

const ToDoList = ({tasks}) => {
  return (
      <ScrollView> 
        
        <Pressable>
        {tasks.map((task) => (
            <View style={[styles.task, styles.incompleted]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          ))} 

        </Pressable>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    task: {
      padding: 15,
      borderBottomWidth: 2,
      borderColor: 'white',
      backgroundColor: '#FF69B4', 
    },
    incompleted: {
      backgroundColor: '#FFC0CB', 
    },
    taskText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
  });


export default ToDoList