import * as React from "react";
import classes from "./NotFoundPage.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/btn/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const openMainPage = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.container__title}>PAGE NOT FOUND</h1>
      <img
        className={classes.container__avatar}
        src={require("../../img/icons/error.png")}
        alt="page not found"
      />
      <Button text={"На главную"} handler={openMainPage} />
    </div>
  );
};

export default NotFoundPage;
