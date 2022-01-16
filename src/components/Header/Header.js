import React from "react";
import style from "./Header.module.css";
import logo from "../../logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/actions";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeChange = (redirect) => {
    navigate(redirect);
  };

  const user = useSelector((state) => state.userReducer);

  return (
    <div className={style.head}>
      <div className={style.head_leftblock}>
        <NavLink to="/">
          <img src={logo} className={style.logo} alt="logo" />
        </NavLink>
        <NavLink className={style.link} to="/news">
          Новости
        </NavLink>
      </div>
      <div className={style.head_rightblock}>
        <button
          onClick={
            user
              ? () => {
                  dispatch(clearUser());
                  navigate("/");
                }
              : () => {
                  routeChange("/login");
                }
          }
          style={
            user
              ? { backgroundColor: "#f44336" }
              : { backgroundColor: "#4caf50" }
          }
        >
          {user ? "Выйти" : "Войти"}
        </button>
      </div>
    </div>
  );
};
