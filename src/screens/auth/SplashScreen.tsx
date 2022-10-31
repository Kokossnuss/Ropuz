import { View, Text, StyleSheet, Image } from "react-native";
import { CenteredWrapper } from "../wrappers/CenteredWrapper";
import { useEffect } from "react";

export default function SplashScreen(props: any) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("login");
    }, 2000);
  });

  return (
    <View style={style.cont}>
      <CenteredWrapper>
        <Text style={style.title}>Ropuz</Text>
        <View style={style.secfirst}>
          <Image
            style={style.second}
            source={require("../../../assets/splashscreen/img_1.png")}
          />
          <Image
            style={style.second}
            source={require("../../../assets/splashscreen/img_1.png")}
          />
        </View>
        <Text style={style.paragraph}>starting Game...</Text>
        <Image
          style={style.third}
          source={require("../../../assets/splashscreen/img_2.png")}
        />
      </CenteredWrapper>
    </View>
  );
}

const style = StyleSheet.create({
  cont: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D4DADB",
  },
  title: {
    fontFamily: "Play-Bold",
    fontSize: 60,
  },
  secfirst: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  paragraph: {
    fontFamily: "Play-Regular",
    marginTop: 50,
  },
  third: {
    marginTop: 50,
  },
  second: {},
});
