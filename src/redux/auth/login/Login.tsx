import {
  StyleSheet,
} from "react-native";
import { useAppSelector } from "../../hooks/Redux";
import CreateUser from "./components/CreateUser";
import UserLogin from "./components/UserLogin";

export default function Login() {
  const newUser = useAppSelector((state) => state.auth.login.new);
  if (newUser) {
    return <CreateUser />;
  } else if (!newUser) {
    return <UserLogin />;
  }
}

export const style = StyleSheet.create({
  cont: {
    width: 300,
    height: 330,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  input: {
    width: "80%",
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderColor: "black",
    fontFamily: "Play-Regular",
    height: 30,
    fontSize: 25,
    marginTop: 50,
  },
  btncont: {
    position: "relative",
    justifyContent: "flex-end",
    width: "80%",
    height: 50,
    alignItems: "center",
  },
  t: {
    fontFamily: "Play-Regular",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  btn: {
    position: "absolute",
    bottom: 90,
    right: 30,
    width: 80,
    height: 40,
    backgroundColor: "lime",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  nbtn: {
    position: "absolute",
    bottom: 40,
  },
});
