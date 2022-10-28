import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Counter from "./components/Counter";
import Splash from "./screens/auth/Splash";

const Stack = createNativeStackNavigator();

export default function Stacknav(){
   
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Group>
                <Stack.Screen name="splash" component={Splash} {...navigator}/>
                <Stack.Screen name="counter" component={Counter}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}