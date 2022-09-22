import * as React from "react";
import classes from "./Damage.module.scss";
import { AppContext } from "../../../context/AppContext";

const Damage = () => {
  const { parameters, setParameters } = React.useContext(AppContext);

  const makeDamage = () => {
    if (parameters.vitality > 0 && setParameters) {
      setParameters({ ...parameters, vitality: parameters.vitality - 1 });
    } else {
      setParameters?.({...parameters, vitality: 0});
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={() => makeDamage()}></button>
      <h4 className={classes.container__title}>Атаковать персонажа</h4>
    </div>
  );
};

export default Damage;
