import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import Button from '@/components/button';
import { useState } from 'react';
import { parse } from '@babel/core';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';


const createProductScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [imageError, setImageError] = useState('');



    const resetFields = () => {
        setName('');
        setPrice('');
    };  
    
    const validateInput = () => {
        setErrors('');
    if (!name) {
        setErrors('Name is required');
        return false;
    
    } if (!price) {
        setErrors('Price is required');
        return false;
    }
    if (isNaN(parseFloat(price))) {
        setErrors('Price must be a number');
        return false;
    }
    return true;
};


    const onCreate = () => {
        if (!validateInput()) {
            return;
        }
        console.warn('creating product', name, price);

        resetFields();
    };

    const pickImage = async () => { 
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
  return (
    <View style={styles.container}>
    <Stack.Screen options={{title: 'Create product', headerTitleAlign: 'center' }} />
    <Image source={{uri: image || defaultPizzaImage}} style={styles.image}/>    
    <Text onPress={pickImage} style= {styles.selectImage}>Select image</Text>

      <Text style={styles.label}>Enter name</Text>
      <TextInput 
      placeholder='Type your name here' 
      style={styles.input}
      value={name}
      onChangeText={setName}
      />

      <Text style={styles.label}>Enter price</Text>
      <TextInput 
      placeholder='16,99€' 
      style={styles.input}
      keyboardType='numeric'
      value={price}
      onChangeText={setPrice}
      />

      <Text style={{color: 'red'}}>{errors}</Text>



      <Button onPress= {onCreate} text= 'create'/>
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
    }

});


export default createProductScreen;