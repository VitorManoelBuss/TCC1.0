import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Vendas"
          onPress={() => navigation.navigate('Vendas')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Produtos"
          onPress={() => navigation.navigate('Produtos')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Relatórios"
          onPress={() => navigation.navigate('Relatorios')}
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
  button: {
    flex: 1,
  },
});

export default HomeScreen;