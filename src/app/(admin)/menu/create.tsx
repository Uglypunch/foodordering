import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native'
import Button from '@/components/button';
import { useState } from 'react';
import { defaultPizzaImage } from '@/components/ProductListItem';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';


const createProductScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [imageError, setImageError] = useState('');

    const {id} = useLocalSearchParams();
    const isUpdating = !!id;




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

    const onSubmit = () => {
        if (isUpdating) {
            onUpdateCreate();
        } else {
            onCreate();
        }};

 

    const onCreate = () => {
        if (!validateInput()) {
            return;
        }
        console.warn('creating product', name, price);

        //save in database

        resetFields();
    };

    const onUpdateCreate = () => {
        if (!validateInput()) {
            return;
        }
        console.warn('updating product', name, price);

        //update in database

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

    const onDelete = () => {
        console.warn('delete!!!!!!!!!!');
    };

const confirmDelete = () => {
    Alert.alert('Delete product', 'Are you sure you want to delete this product?', 
    [{
        text: 'Cancel',
    },
    {
        text: 'Delete',
        style: 'destructive',
        onPress: onDelete,
    },
])
};








    ////////////////////////////////////////////////////////////////////////////////////
  return (
    <View style={styles.container}>
    <Stack.Screen 
    options={{title: isUpdating ? 'Update' : 'Create' , 
    headerTitleAlign: 'center' }} 
    />
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

      <Text style={{color: 'red'}}>{[errors]}</Text>



      <Button onPress= {onCreate} text={ isUpdating ? 'Update product' : 'Create product'}/>
      {isUpdating && <Text onPress={confirmDelete} style={styles.textButton}>Delete</Text>}
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


export default createProductScreen;