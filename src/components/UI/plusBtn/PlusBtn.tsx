import * as React from "react";
import classes from "./PlusBtn.module.scss";

type Props = {
  handler(): void;
};

const PlusBtn: React.FC<Props> = (props) => {
  const { handler } = props;
  return <button className={classes.btn} onClick={() => handler()} />;
};

export default PlusBtn;
