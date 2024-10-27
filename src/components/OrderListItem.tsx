import { StyleSheet, Image, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { Text, View} from '@/components/Themed';
import { Order } from 'assets/types';
import { Link, useSegments } from 'expo-router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Order;

}

const OrderListItem = ({ order }: OrderListItemProps) => {
  //console.log(props);

  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
    <Pressable style={styles.container}>
      <View>
      <Text style={styles.title}>Order number #{order.id}</Text>
      <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
      </View>
      <Text style={styles.status}>{order.status}</Text>
      
    </Pressable>
    </Link>
  );
};

export default OrderListItem;





const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  time: {
    color: 'gray',
  },
  status: {
    fontWeight: '500',
  },

});
