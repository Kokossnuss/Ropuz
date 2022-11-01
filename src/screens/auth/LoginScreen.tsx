import { View, StyleSheet, Text } from "react-native";
import { CenteredWrapper } from "../../components/wrappers/CenteredWrapper";
import Login  from "../../redux/auth/login/Login";

export default function LoginScreen(){

    return(
        <View style={style.cont}>
            <CenteredWrapper>
                <Text style={style.title}>User Login</Text>
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