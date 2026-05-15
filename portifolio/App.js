import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from '@expo/vector-icons';
import Habilidades from './src/screens/Habilidades.js';
import Projeto from './src/screens/Projeto.js';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.caixa}>
        <View style={styles.icon}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/ferrnd/book-club-mobile-backend/refs/heads/main/images/members/fernando-santos.jpeg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>Fernando Santos</Text>
        <Text>Full Stack Developer</Text>
        <View style={styles.row}>
          <FontAwesome name="github" size={55} color="black" />
          <FontAwesome name="linkedin-square" size={55} color="#0077b5" />
          <MaterialIcons name="email" size={55} color="#ff7c7c" />
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false, 
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 5,
            backgroundColor: '#ffffff',
            borderRadius: 30,
            height: 70,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? "person" : "person-outline"} size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Habilidades" 
          component={Habilidades} 
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? "construct" : "construct-outline"} size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Projeto" 
          component={Projeto} 
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? "folder-open" : "folder-open-outline"} size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 7,
  },
  caixa: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 20,
  },
  icon: {
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    width: 110,
    height: 110,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
  },
});