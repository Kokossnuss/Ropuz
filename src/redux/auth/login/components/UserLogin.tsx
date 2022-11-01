import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    KeyboardAvoidingView,
  } from "react-native";
  import { useAppDispatch} from "../../../hooks/Redux";
  import {
    newUser,
    username,
    password,
  } from "../loginSlice";
  import {style} from "../Login"
  import { _callback } from "../../../../controllers/user/_callback";

  export default function UserLogin(){
    const dispatch = useAppDispatch();
   
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={style.cont}>
        <TextInput
          style={style.input}
          placeholder="username"
          onChangeText={(Text) => dispatch(username(Text))}
        />
        <TextInput
          style={style.input}
          placeholder="password"
          onChangeText={(Text) => dispatch(password(Text))}
        />
        <TouchableOpacity onPress={()=>_callback()} style={style.btn}>
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
  }