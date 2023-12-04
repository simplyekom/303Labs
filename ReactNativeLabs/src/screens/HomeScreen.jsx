import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Button } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {

  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to the gym',
    'Walk the dog',
    'Work on assignment',
  ]);

  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <View style= {{margin: 20}}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;