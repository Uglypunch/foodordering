import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import { router, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { useState } from 'react';
import Button from '@/components/button';
import { useCart } from '@/providers/CartProvider';
import { PizzaSize } from '@assets/types';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const sizes : PizzaSize[] = ['S' , 'M' , 'L' , 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const {addItem} = useCart();

  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

  const product = products.find((p) => p.id.toString() == id);

  const addToCart = () => {
    if (!product) { 
      return; 
    }
    addItem(product, selectedSize);    
    router.push('/cart')
  };
 
  if (!product) {
    return <Text>Product not found</Text>
  }
 const productName = product.name; 

  return (
    <View style={styles.container}>
      <Stack.Screen 
           options={{ 
          title: 'Menu', 
          headerShown: true, 
          headerTitleAlign: 'center', 
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id={id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
        ),}} />

      <Stack.Screen options={{title: productName, headerTitleAlign: 'center' }} />

      <Image source={{uri: product.image || defaultPizzaImage}} style={styles.image}/>

      <Text>Select size</Text>
      
      <Text style={styles.price}>€ {product.name} </Text>
      <Text style={styles.price}>€ {product.price} </Text>

      <Button onPress={addToCart} text='lisää ostoskoriin'/>
         
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image:{
    width: '100%',
    aspectRatio: 1,
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
    //marginTop: 'auto',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  },
});