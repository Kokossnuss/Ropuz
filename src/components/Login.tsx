import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/Redux";
import {
  existingUser,
  newUser,
  createUser,
  usernamest,
  emailst,
  passwordst,
  loginUser,
} from "../slices/loginSlice";

export default function Login() {
  const newUser = useAppSelector((state) => state.login.new);
  if (newUser) {
    return <CreateUser />;
  } else if (!newUser) {
    return <UserLogin />;
  }
}

export const UserLogin = () => {
  const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <TextInput
          style={style.input}
          placeholder="username"
          onChangeText={(Text) => dispatch(usernamest(Text))}
        />
        <TextInput
          style={style.input}
          placeholder="password"
          onChangeText={(Text) => dispatch(passwordst(Text))}
        />
        <TouchableOpacity onPress={()=>{dispatch(loginUser())}} style={style.btn}>
          <Text style={[style.t, { textDecorationLine: "none" }]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(newUser())}
          style={style.nbtn}
        >
          <Text style={style.t}>Create new User</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView />
      </View>
    </KeyboardAvoidingView>
  );
};

export const CreateUser = () => {
  const dispatch = useAppDispatch();

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <TextInput
          onChangeText={(Text) => dispatch(usernamest(Text))}
          style={style.input}
          placeholder="username"
        />
        <TextInput
          onChangeText={(Text) => dispatch(emailst(Text))}
          style={style.input}
          placeholder="E-Mail"
        />
        <TextInput
          onChangeText={(Text) => dispatch(passwordst(Text))}
          style={style.input}
          placeholder="password"
        />
        <TouchableOpacity onPress={()=>dispatch(createUser())} style={[style.btn, { bottom: 20 }]}>
          <Text style={[style.t, { textDecorationLine: "none" }]}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(existingUser())}
          style={[style.nbtn, { bottom: 30, left: 30 }]}
        >
          <Text style={style.t}>existing User</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
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
