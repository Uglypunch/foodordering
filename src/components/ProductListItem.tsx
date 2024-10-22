import { StyleSheet, Image, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { Text, View} from '@/components/Themed';
import { Product } from 'assets/types';
import { Link } from 'expo-router';

export const defaultPizzaImage = 
'https://ih1.redbubble.net/image.2543658110.8249/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg';

type ProductListItemProps = {
  product: Product;

}

const ProductListItem = ({ product }: ProductListItemProps) => {
  //console.log(props);
  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image source={{uri: product.image || defaultPizzaImage }} 
      style={styles.image}
      resizeMode='contain'
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>€ {product.price}</Text>
      
    </Pressable>
    </Link>
  );
};

export default ProductListItem;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    padding: 10,
    borderRadius: 50,
    flex: 1,  
    maxWidth: '50%',
   // alignContent: 'center',
    //margin: 10,
   // flex: 0,
    //height: '20%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    //height: 1,
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
