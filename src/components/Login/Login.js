import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../redux/actions";
import style from "./Login.module.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  const accounts = [
    {
      login: "admin",
      password: "superadmin",
      accountType: 1,
    },
    {
      login: "user",
      password: "superuser",
      accountType: 0,
    },
  ];
  const [dataState, setData] = useState({ login: "", password: "" });
  const [message, setMessage] = useState("");
  const auth = () => {
    const searchedUser = accounts.find((el) => el.login === dataState.login);
    if (searchedUser) {
      if (searchedUser.password === dataState.password) {
        dispatch(setUser({ ...searchedUser, password: undefined }));
        navigate("/");
      } else {
        console.log(searchedUser.password, dataState.password);
        setMessage("Неверный пароль");
      }
    } else {
      setMessage(`Логин ${dataState.login} не найден!`);
    }
  };

  return (
    <div className={style.loginPage}>
      <p>Авторизация</p>
      <input
        onChange={(event) => {
          setData({ ...dataState, login: event.target.value });
        }}
        value={dataState.login}
        placeholder="Логин"
      ></input>
      <input
        onChange={(event) => {
          setData({ ...dataState, password: event.target.value });
        }}
        value={dataState.password}
        placeholder="Пароль"
        type="password"
      ></input>
      <button onClick={auth}>Войти</button>
      <p className={style.message}>{message}</p>
    </div>
  );
};
