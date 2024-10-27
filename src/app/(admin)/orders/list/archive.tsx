import { FlatList } from 'react-native';
import { View } from '@/components/Themed';
import orders from 'assets/data/orders';
import OrderListItem from '@/components/OrderListItem';

//import { FlatListComponent } from 'react-native';


//by replacing data={products} ==>  data={products.slice(0,10)} you can limit the products to first 10 items. index 10 is NOT included


export default function orderScreen() {
  return (
    
      <FlatList
        data={orders.slice(0,10)}
        contentContainerStyle={{gap: 10, padding: 10}}
        renderItem={({ item }) => <OrderListItem order={item}  />}
        
        
        
      />
      
    
  );
}
