import { useAppSelector } from "../../hooks/Redux";
import CreateUser from "./components/CreateUser";
import UserLogin from "./components/UserLogin";
import AutoLogin from "./components/AutoLogin";

export default function Login() {
  const process = useAppSelector((state) => state.auth.login.type.process);
      switch(process){
        case 'login':
         return <UserLogin/>
        case 'signUp':
         return <CreateUser/>
        case 'auto':
          return <AutoLogin/>
      }
}

