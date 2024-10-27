import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react';
import { useState } from 'react';
import Button from '@/components/button';
import { Link, Stack } from 'expo-router';



const signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const resetFields = () => {
    setEmail('');
    setPassword('');
};  

  const validateInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrors('Email is required');
      return false;
    }  
    if (!emailRegex.test(email)) {
      setErrors('Invalid email format');
      return false;
    }    
    if (!password) {  
      setErrors('Password is required');
      return false;
    } 
    return true;
  };

 const onSignIn = () => {
    if (!validateInput()) {
      return;
    }
    console.warn('Signing in');

    resetFields();
  };



  return (
    
<View style={styles.container}>
  <Stack.Screen options={{ title: 'Sign in', headerShown: true, headerTitleAlign: 'center'}} />

<Text style={styles.label}>Email</Text>
<TextInput 
  placeholder='john.doe@email.com' 
  style={styles.input}
  value={email}
  onChangeText={setEmail}
  />

<Text style={styles.label}>Password</Text>
<TextInput 
  placeholder='Atleast 6 characters' 
  style={styles.input}
  secureTextEntry={true}
  value={password}
  onChangeText={setPassword}
  />
  <Text style={{color: 'red'}}>{[errors]}</Text>

  <Button onPress= {onSignIn} text='Sign in'/>


  <Link href={'/sign-up'} asChild>
    <Text style={styles.textButton}>Create new account</Text>
  </Link>



{/* 
<Image source={{uri: image || defaultPizzaImage}} style={styles.image}/>    
<Text onPress={pickImage} style= {styles.selectImage}>Select image</Text>

  <Text style={styles.label}>Enter name</Text>
  <TextInput 
  placeholder='Type your name here' 
  style={styles.input}
  //value={name}
  //onChangeText={setName}
  />

  <Text style={styles.label}>Enter price</Text>
  <TextInput 
  placeholder='16,99€' 
  style={styles.input}
  keyboardType='numeric'
  //value={}
  //onChangeText={setPrice}
  />

  <Text style={{color: 'red'}}>{errors}</Text>



  <Button onPress= {onCreate} text={ isUpdating ? 'Update product' : 'Create product'}/> */}
  
</View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      padding: 10
  },
  label: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold'

  },
  input: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
  },
  image: {
      width: '50%',
      aspectRatio: 1,
      alignSelf: 'center',
  },
  selectImage: { 
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 10,
      marginBottom: 10,
  }    ,
  textButton: { 
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: 10,
      marginBottom: 10,
  }

});

export default signin;
