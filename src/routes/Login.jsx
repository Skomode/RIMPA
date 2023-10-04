import { useAuth0 } from "@auth0/auth0-react";
import Bot from "../components/Bot";
import Mid from "../components/Mid";
import NavBar from "../components/NavBar";

export default function Login() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <NavBar />
      <Mid formularioLogin />
      <Bot />
    </div>
  );
}
