import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';
  
  import { Animated, Easing, Platform } from 'react-native';
  
  import Inicio from './src/inicio'
  import card from './src/card'
  
  export function fromRight(duration = 150) {
    return {
      transitionSpec: {
        duration,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: ({ layout, position, scene }) => {
        const { index } = scene;
        const { initWidth } = layout;
  
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [initWidth, 0, 0],
        });
  
        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
  
        return { opacity, transform: [{ translateX }] };
      },
    };
  }
  
  
  const RootStack = createStackNavigator({
      Inicio: {
        screen: Inicio
      },
      card:{
        screen: card
      },
  },
  
  {
    transitionConfig: () => fromRight()
  },
  );
  
  console.disableYellowBox = true;
  
  const App = createAppContainer(RootStack);
  
  export default App;