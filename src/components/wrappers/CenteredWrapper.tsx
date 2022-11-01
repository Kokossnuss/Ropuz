import {View, StyleSheet} from "react-native"



export const CenteredWrapper = (props:any)=>{

    return(
        <View style={style.wrapper}>
            {props.children}
        </View>
    )
}
const style=StyleSheet.create({
    wrapper:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    }
})