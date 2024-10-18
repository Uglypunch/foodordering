import { FlatList } from 'react-native';
import { View } from '@/components/Themed';
import products from '@/assets/data/products';
import ProductListItem from '@/components/ProductListItem';

//import { FlatListComponent } from 'react-native';


//by replacing data={products} ==>  data={products.slice(0,10)} you can limit the products to first 10 items. index 10 is NOT included


export default function MenuScreen() {
  return (
    
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item}  />}
        numColumns={2}   columnWrapperStyle={{gap: 10, padding: 10}}
        contentContainerStyle={{gap: 10, padding: 10}}
        
      />
      
    
  );
}
