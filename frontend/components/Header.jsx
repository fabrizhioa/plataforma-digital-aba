import React from "react";

const NavLink = ({ href, children }) => <a href={href}>{children}</a>;

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-2 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">ABA</h1>
      <nav className=" space-x-4">
        <NavLink href="#">Inicio</NavLink>
        <NavLink href="#">Perfil</NavLink>
        <NavLink href="#">Salir</NavLink>
      </nav>
    </header>
  );
}
