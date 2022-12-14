import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import {store} from "./src/redux/Store"
import { NavigationContainer } from '@react-navigation/native';
import Stacknav from './src/Stacknav';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsloaded]= useFonts({
    'Play-Regular': require('./assets/fonts/Play/Play-Regular.ttf'),
    'Play-Bold': require('./assets/fonts/Play/Play-Regular.ttf')
  })
  if(!fontsloaded)return null;
  
  return (
    
      <Provider store={store}>
        <NavigationContainer>
          <Stacknav/>
        </NavigationContainer>
    </Provider>
    
  );
}

