import * as React from "react";
import classes from "./Header.module.scss";

type Props = {
  header: string;
};

const Header: React.FC<Props> = (props) => {
  const { header } = props;
  return (
    <div className={classes.container}>
      <h1 className={classes.container__title}>{header}</h1>
    </div>
  );
};

export default Header;
