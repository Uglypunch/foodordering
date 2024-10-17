import { FlatList } from 'react-native';
import { View } from '@/components/Themed';
import products from '@/assets/data/products';
import ProductListItem from '@/components/ProductListItem';

//import { FlatListComponent } from 'react-native';





export default function MenuScreen() {
  return (
    <View style={{flex:1}}>
   {/*    <ProductListItem product= {products[0]} /> 
      <ProductListItem product= {products[1]} />  */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item}  />}
        numColumns={2}
        contentContainerStyle={{gap: 10, padding: 10}}
        columnWrapperStyle={{gap: 10, padding: 10}}
      />
      
    </View>
  );
}
