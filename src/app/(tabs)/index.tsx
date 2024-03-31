import { View, FlatList } from 'react-native';
import products from 'assets/data/products';
import ProdutListItem from 'src/components/ProductListItem';



export default function MenuScreen() {
  return (
      <FlatList
        data={products}
        renderItem={({ item }) => <ProdutListItem product={item} />}
        />
  );
}

