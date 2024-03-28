import { View } from 'react-native';
import products from '@/assets/data/products';
import ProdutListItem from '@/src/components/ProductListItem';



export default function MenuScreen() {
  return (
    <View>
      <ProdutListItem product={products[5]} />
      <ProdutListItem product={products[1]} />   
    </View>
  );
}

