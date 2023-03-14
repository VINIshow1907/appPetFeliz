//biblioteca para melhorar a sensibilidade do touch
import 'react-native-gesture-handler';
import React from 'react';
//biblioteca de navegação entre as telas
import { NavigationContainer } from '@react-navigation/native';
//biblioteca que permite a navegação em pilha
import { createStackNavigator } from '@react-navigation/stack';

//importando as páginas para o usúario poder ver
import Home from './components/home';
import Login from './components/login';
import Ajuda from './components/ajuda';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AppPetFeliz"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
           <Stack.Screen
            name="Ajuda"
            component={Ajuda}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;