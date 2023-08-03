import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function ProdutoVendasScreen({ route }) {
  const { products } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            <Text>Preço: R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Adicione padding para evitar que o conteúdo fique colado nas bordas
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
});

export default ProdutoVendasScreen;