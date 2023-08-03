import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VendasScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Dinheiro"
          onPress={() => navigation.navigate('ProdutoVendas')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Pix"
          onPress={() => navigation.navigate('ProdutoVendas')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cartão de crédito"
          onPress={() => navigation.navigate('ProdutoVendas')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cartão de débito"
          onPress={() => navigation.navigate('ProdutoVendas')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    width: 200, 
    marginVertical: 10,
  },
});

export default VendasScreen;