import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const RelatoriosScreen = () => {
  const route = useRoute();
  // const { soldProduct } = route.params;

  return (
    <View style={styles.container}>
      <Text>Relatórios Screen</Text>
      {/* <Text>Produto Vendido: {soldProduct.name}</Text>
      <Text>Quantidade Vendida: {soldProduct.quantitySold}</Text>
      <Text>Valor Total: R$ {soldProduct.totalValue.toFixed(2)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RelatoriosScreen;