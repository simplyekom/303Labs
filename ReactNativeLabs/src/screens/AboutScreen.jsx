import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const getDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
};

const AboutScreen = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <MainLayout>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>App Name: To Do List</Text>
          <Text style={styles.text}>Name: Ekom Uffort </Text>
          <Text style={styles.text}>Today's Date: {currentDate}</Text>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
    container: {
      margin: 15,
      alignItems: 'center',
      backgroundColor: '#FFC0CB', 
      padding: 25,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    text: {
      fontSize: 22,
      fontFamily: 'sans-serif', 
      marginBottom: 15,
      color: 'black',
      fontWeight: 'bold',
    },
  
  
});

export default AboutScreen;