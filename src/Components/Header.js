import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const usuario = React.useContext(UserContext);
  console.log(usuario);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          {usuario.usuario}
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
