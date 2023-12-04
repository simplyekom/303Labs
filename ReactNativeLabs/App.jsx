/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const App = () => {

  const [tasks, setTasks] = useState(['Do Laundry', 'Go to the Gym', 'Walk the Dog', 'Work on Assignment', 'Go shopping']);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;