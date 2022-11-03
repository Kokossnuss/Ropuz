import { View, StyleSheet, Text } from "react-native";
import { CenteredWrapper } from "../../components/wrappers/CenteredWrapper";
import Login  from "../../redux/auth/login/Login";
import { useAppSelector } from "../../redux/hooks/Redux";

export default function LoginScreen(props:any){
    const message= useAppSelector(state=>state.auth.login.submit.message);

    const loginHandler=()=>{
        switch (message){
            case 'Loged in':
                return //ask if loginData should be saved for autologin
            default:
               return Login()
        }
    }
    return(
        <View style={style.cont}>
            <CenteredWrapper>
                <Text style={style.title}>{message}</Text>
                {loginHandler()}
            </CenteredWrapper>
        </View>
    )
}

const style= StyleSheet.create({
    cont:{
        width: "100%",
        height: "100%",
        backgroundColor: "#D4DADB",
    },
    title:{
        fontFamily:"Play-Regular",
        fontSize: 30,
        marginBottom: 30,
    }
})