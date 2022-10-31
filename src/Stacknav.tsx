import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counter from "./components/Counter";
import SplashScreen from "./screens/auth/SplashScreen";
import LoginScreen from "./screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();

export default function Stacknav(){
   
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Group>
                <Stack.Screen name="splash" component={SplashScreen} {...navigator}/>
                <Stack.Screen  name="login" component={LoginScreen} {...navigator}/>
                <Stack.Screen name="counter" component={Counter}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}