import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width : SCREEN_WIDTH } = Dimensions.get("window");
// console.log(SCREEN_WIDTH);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView 
        showsHorizontalScrollIndicator={false} 
        pagingEnabled 
        horizontal 
        contentContainerStyle={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desc}>sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1, 
    backgroundColor: "blue",
    
  }, 
  city : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName : {
    fontSize: 68,
    fontWeight: "500",
    color: "white",
  },
  weather : {

    
  },
  day : {
    width: SCREEN_WIDTH,
    alignItems: "center",
    
    
  },
  temp : {
    fontSize: 150,
    marginTop: 50,
    color: "white",
  },
  desc:{
    fontSize: 60,
    marginTop: -30,
    color: "white",
  },
})