import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  
  return (
    <View>
      <Stack.Screen options={{title: 'Details: ' + id, headerTitleAlign: 'center' }} />

      <Text style={{fontSize: 20}}>This is product details screen for id: {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

//const styles = StyleSheet.create({})