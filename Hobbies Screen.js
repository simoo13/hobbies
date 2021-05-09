import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';




  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    hobbies:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    playing:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    gaming :{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    dancing:{
      flexDirection: 'row',
      margin: 20
    },
    photography:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },