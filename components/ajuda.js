//declaração de componentes a serem utilizados
import { View, StyleSheet, Image, Button, Text } from 'react-native';
//declaração de componentes visuais mais elaborados
import React from 'react';

const Separator = () => {
  return <View style={styles.separator} />;
}

class Ajuda extends React.Component {
  render(){
  return (
    <View style={styles.container}>
    
    <Text style={styles.titulo}>
    CENTRAL DE ATENDIMENTO
    </Text> 
    <Image style={styles.logo} source={require('../assets/ajuda.jpg')} />

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4D9DA',
  },
  logo:{
    width: 350,
    height: 350,
    marginTop: '10'
  },
  titulo:{

  },
 });
 export default Ajuda;
