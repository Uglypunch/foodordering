import { StyleSheet, Image } from 'react-native';
import Colors from '@/constants/Colors';

import { Text, View,} from '@/components/Themed';


//const product = products[0];

const ProductListItem = ({ product }) => {
  //console.log(props);
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>€ {product.price}</Text>
    </View>
  );
};

export default ProductListItem;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,  
    //height: '20%'
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
    color: 'blue',
    width: '80%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }

});
