import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
       navigation.setOptions({
        headerShown: true,
        title: "Vegas Experience",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          
        },
        headerStyle: {
          backgroundColor: "#df1b0a",
          height: 110,
          borderBottomColor: "transparent",
          shadowColor: "transparent",
        },
        headerRight : () => {
          <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          style={{ marginRight: 12 }}
        />
        }
       });
      
        

  },[])
  return (
    <View>
    <Header/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})