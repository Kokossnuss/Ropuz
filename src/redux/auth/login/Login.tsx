import { useAppSelector } from "../../hooks/Redux";
import CreateUser from "./components/CreateUser";
import UserLogin from "./components/UserLogin";

export default function Login() {
  const newUser = useAppSelector((state) => state.auth.login.type.newUser);
  
  if (newUser) {
    return <CreateUser />;
  } else if (!newUser) {
    return <UserLogin />;
  }
}

