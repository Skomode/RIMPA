import { Outlet } from "react-router-dom";
import Bot from "../components/Bot";
import Mid from "../components/Mid";
import NavBar from "../components/NavBar";

export default function Operacion() {
  return (
    <div>
      <NavBar iniciado />
      <Mid operacion />
      <Bot />
    </div>
  );
}
