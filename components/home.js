//declaração de componentes a serem utilizados
import { View, StyleSheet, Image, Button } from 'react-native';
//declaração de componentes visuais mais elaborados
import React from 'react';

const Separator = () => {
  return <View style={styles.separator} />;
}

class Home extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/petfeliz.png')} />
    
     <Button
           onPress={() =>this.props.navigation.navigate('Login')}
          title="I N I C I A R"
          color="#F655C9"
        />
        <Separator/>
        <Button 
           onPress={() =>this.props.navigation.navigate('Ajuda')}
          title="A J U D A"
          color="#F655C9"
        />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4D9DA',
  },
  logo: {
    width: 331,
    height: 400,
    margin: 'auto'
  },
  separator:{
    marginVertical: 5,
  }, 
 });
 export default Home;




