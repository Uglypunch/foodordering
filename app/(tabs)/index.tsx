import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View,} from '@/components/Themed';
import products from '@/assets/data/products';

const product = products[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>€ {product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 51,  
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  price: {
    fontSize: 30,
    height: 1,
    color: 'blue',
    width: '80%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }

});
