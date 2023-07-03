import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#C6020C",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        
      }}
    >
     <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 5,
          width: "25%", 
        }}
      >
        <Fontisto name="hotel" size={22} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
         Hoteis
        </Text>
      </Pressable>

      <Pressable
        style={{
          
          flexDirection: "row",
          alignItems: "center",
         
      
        }}
      >
        <Ionicons name="airplane-outline" size={23} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
       Pacotes
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
        }}
      >
        <MaterialCommunityIcons name="cards-playing-club-multiple-outline" size={22} color="white" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
         Turismo
        </Text>
      </Pressable>

      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
