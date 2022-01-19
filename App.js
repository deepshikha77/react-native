import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Article from './screens/Article';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
