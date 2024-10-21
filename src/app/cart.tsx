import { View, Text, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { useCart } from '@/providers/CartProvider';

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <Text> We have this number of items in cart: {items.length} </Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;