import React from "react";
import { useDispatch } from "react-redux";
import { acceptNew, rejectNew } from "../../../redux/actions";
import style from "./New.module.css";

export const New = ({ id, name, message, assigned, date }) => {
  const dispatch = useDispatch();

  return (
    <div key={name} className={style.new}>
      <p className={style.new_name}>{name}</p>
      <p className={style.new_message}>{message}</p>
      {date && (
        <p
          className={style.new_date}
        >{`${date.getHours()}:${date.getMinutes()} | ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}</p>
      )}
      {!assigned && (
        <div className={style.new_buttons}>
          <button
            onClick={() => {
              dispatch(acceptNew(id));
            }}
          >
            Принять
          </button>
          <button
            onClick={() => {
              dispatch(rejectNew(id));
            }}
          >
            Отколнить
          </button>
        </div>
      )}
    </div>
  );
};
