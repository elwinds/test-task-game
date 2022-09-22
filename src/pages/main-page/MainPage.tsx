import * as React from "react";
import classes from "./MainPage.module.scss";
import Character from "../../components/main/character/Character";
import Damage from "../../components/main/damage/Damage";
import EditBtn from "../../components/main/edit-btn/EditBtn";
import Footer from "../../components/main/footer/Footer";
import Options from "../../components/main/options/Options";
import Header from "../../components/common/header/Header";
import { AppContext } from "../../context/AppContext";

const MainPage = () => {
  const appContext = React.useContext(AppContext);

  return (
    <>
      <Header header={"Окно персонажа"} />
      <div className={classes.container}>
        <div className={classes.column}>
          <Character name={appContext.name} />
          <Damage />
        </div>
        <div className={classes.column}>
          <Options />
          <EditBtn />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
