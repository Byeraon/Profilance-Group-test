import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNews } from "../../../redux/actions";
import style from "./NewsModal.module.css";

export const NewsModal = ({ opened, setNew }) => {
  const dispatch = useDispatch();

  const [dataState, setData] = useState({ name: "", message: "" });
  const [message, setMessage] = useState("");
  const send = () => {
    if (dataState.name.length > 0 && dataState.message.length > 0) {
      dispatch(setNews({ ...dataState, assigned: false }));
      setData({ name: "", message: "" });
      setNew();
      setMessage("");
    } else {
      setMessage("Вы должны ввести название и текст для отправки!");
    }
  };
  return (
    <div
      style={
        opened
          ? {
              maxWidth: "1000px",
              opacity: 1,
            }
          : {}
      }
      className={style.newModal}
    >
      <button onClick={setNew} className={style.cross}></button>
      <p>Отправить новость</p>
      <input
        onChange={(event) => {
          setData({ ...dataState, name: event.target.value });
        }}
        value={dataState.name}
        placeholder="Название"
      ></input>
      <textarea
        onChange={(event) => {
          setData({ ...dataState, message: event.target.value });
        }}
        value={dataState.message}
        placeholder="Текст"
        type="password"
      ></textarea>
      <button onClick={send}>Отправить</button>
      {message && <p className={style.message}>{message}</p>}
    </div>
  );
};
