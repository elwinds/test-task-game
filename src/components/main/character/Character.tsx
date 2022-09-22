import * as React from "react";
import classes from "./Character.module.scss";

type Props = {
  name: string;
};

const Character: React.FC<Props> = (props) => {
  const { name } = props;
  return (
    <div className={classes.container}>
      <h3 className={classes.container__name}>{name}</h3>
      <img
        className={classes.container__avatar}
        src={require("../../../img/avatar.png")}
        alt="character appearance"
      />
    </div>
  );
};

export default Character;
