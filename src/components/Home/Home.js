import React from "react";
import { useSelector } from "react-redux";
import style from "./Home.module.css";

export const Home = () => {
  const user = useSelector((state) => state.userReducer);
  return (
    <div className={style.homepage}>Привет, {user ? user.login : "Гость"}!</div>
  );
};
