import * as React from "react";
import classes from "./EditFooter.module.scss";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import Button from "../../UI/btn/Button";

type Props = {
  nameValue: string;
  powerValue: number;
  agilityValue: number;
  intellectValue: number;
  charismaValue: number;
};

const EditFooter: React.FC<Props> = (props) => {
  const { nameValue, powerValue, agilityValue, intellectValue, charismaValue } =
    props;

  const { setName, setParameters } = React.useContext(AppContext);

  const navigate = useNavigate();

  const openMainPage = () => {
    navigate("/");
  };

  const saveValuesButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName?.(nameValue);
    setParameters?.({
      power: powerValue,
      agility: agilityValue,
      intellect: intellectValue,
      charisma: charismaValue,
      vitality: powerValue + 3,
    });
    navigate("/");
  };

  const buttons = [
    {
      text: "Отмена",
      handler: () => openMainPage(),
    },
    {
      text: "Сохранить изменения",
      handler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        saveValuesButtonHandler(e),
    },
  ];

  return (
    <div className={classes.container}>
      {buttons.map((button) => (
        <Button key={button.text} text={button.text} handler={button.handler} />
      ))}
    </div>
  );
};

export default EditFooter;
