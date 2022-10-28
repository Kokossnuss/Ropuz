import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAppSelector, useAppDispatch } from "../hooks/Redux";
import { increment, decrement } from "../slices/counterSlice";
import { CenteredWrapper } from "../screens/wrappers/CenteredWrapper";


export default function Counter(){
    const count= useAppSelector(state=>state.counter.value)
    const dispatch= useAppDispatch()
    return(
        <CenteredWrapper>
        <View style={style.cont}>
            <Text style={style.text}>Stored Number {count}</Text>
            <View style={style.btnCont}>
            <TouchableOpacity onPress={()=>dispatch(increment())} style={style.btn}>
                <Text style={style.text}>increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch(decrement())} style={style.btn}>
                <Text style={style.text}>decrement</Text>
            </TouchableOpacity>
            </View>
            </View>
        </CenteredWrapper>
    )
}

const style=StyleSheet.create({
    cont:{
        width: 200,
        height: 200,
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "black",
        justifyContent:"space-between",
    },
    text:{
        fontSize: 18,
        fontFamily: 'Play-Regular',
    },
    btnCont:{
        width: "100%",
        height: "60%",
        display: "flex",
        flexDirection: "row",
    },
    btn:{
        width: "50%",
        height: "100%",
        backgroundColor: "lightgrey",
        justifyContent:"center",
        alignItems: "center"
    }
})