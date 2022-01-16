import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { New } from "./New/New";
import style from "./News.module.css";
import { NewsModal } from "./NewsModal/NewsModal";

export const News = () => {
  const [newsModal, setNew] = useState(false);
  const [isChecking, setCheck] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const news = useSelector((state) => state.systemReducer.news);
  useEffect(() => {
    console.log(user);
    console.log(news);
  }, [user, news]);
  return (
    <div className={style.newsPage}>
      <p className="title">Новости</p>
      <div className={style.newsContext}>
        {user.accountType === 1
          ? news
              .filter((elem) => elem.assigned !== isChecking)
              .map((el) => (
                <New
                  key={el.id}
                  date={el.date}
                  id={el.id}
                  name={el.name}
                  message={el.message}
                  assigned={el.assigned}
                />
              ))
          : news
              .filter((elem) => elem.assigned)
              .map((el) => (
                <New
                  key={el.id}
                  date={el.date}
                  id={el.id}
                  name={el.name}
                  message={el.message}
                  assigned={el.assigned}
                />
              ))}
      </div>
      <NewsModal
        opened={newsModal}
        setNew={() => {
          setNew(false);
        }}
      />
      {user && (
        <div className={style.toolKit}>
          {user.accountType === 0 ? (
            <>
              <button
                onClick={() => {
                  setNew(true);
                }}
              >
                Отправить новость
              </button>
            </>
          ) : (
            <div>
              <button
                style={
                  isChecking
                    ? { backgroundColor: "#cdcdcd" }
                    : { cursor: "not-allowed" }
                }
                onClick={() => {
                  setCheck(false);
                }}
              >
                Новости
              </button>
              <button
                style={
                  !isChecking
                    ? { backgroundColor: "#cdcdcd" }
                    : { cursor: "not-allowed" }
                }
                onClick={() => {
                  setCheck(true);
                }}
              >
                Проверка
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
