import { View, StyleSheet, Text } from "react-native";
import { CenteredWrapper } from "../../components/wrappers/CenteredWrapper";
import Login  from "../../redux/auth/login/Login";
import { useAppSelector } from "../../redux/hooks/Redux";

export default function LoginScreen(props:any){
    const message= useAppSelector(state=>state.auth.login.submit.message)
    return(
        <View style={style.cont}>
            <CenteredWrapper>
                <Text style={style.title}>{message}</Text>
                {Login()}
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