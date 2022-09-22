import * as React from "react";
import classes from "./EditOptions.module.scss";
import { AppContext } from "../../../context/AppContext";
import EditFooter from "../edit-footer/EditFooter";

const EditOptions = () => {
  const { name, parameters } = React.useContext(AppContext);

  const [inputValues, setInputValues] = React.useState({
    nameValue: name,
    powerValue: parameters.power,
    agilityValue: parameters.agility,
    intellectValue: parameters.intellect,
    charismaValue: parameters.charisma,
  });

  return (
    <form>
      <div className={classes.container}>
        <div className={classes.character}>
          <input
            className={classes.input}
            value={inputValues.nameValue}
            onChange={(e) =>
              setInputValues({ ...inputValues, nameValue: e.target.value })
            }
          />
          <img
            className={classes.character__avatar}
            src={require("../../../img/avatar.png")}
            alt="character appearance"
          />
        </div>
        <div className={classes.options}>
          <div className={classes.options__title}>Параметры</div>
          <div className={classes.options__item}>
            <label htmlFor="power">Сила:</label>
            <input
              className={classes.input}
              id="power"
              value={inputValues.powerValue}
              type="number"
              min="0"
              onChange={(e) => {
                setInputValues({
                  ...inputValues,
                  powerValue: Number(e.target.value),
                });
              }}
            />
          </div>
          <div className={classes.options__item}>
            <label htmlFor="agility">Ловкость:</label>
            <input
              className={classes.input}
              id="agility"
              value={inputValues.agilityValue}
              type="number"
              min="0"
              onChange={(e) => {
                setInputValues({
                  ...inputValues,
                  agilityValue: Number(e.target.value),
                });
              }}
            />
          </div>
          <div className={classes.options__item}>
            <label htmlFor="intellect">Интеллект:</label>
            <input
              className={classes.input}
              id="intellect"
              type="number"
              min="0"
              value={inputValues.intellectValue}
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  intellectValue: Number(e.target.value),
                })
              }
            />
          </div>
          <div className={classes.options__item}>
            <label htmlFor="charisma">Харизма:</label>
            <input
              className={classes.input}
              id="charisma"
              value={inputValues.charismaValue}
              type="number"
              min="0"
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  charismaValue: Number(e.target.value),
                })
              }
            />
          </div>
        </div>
      </div>
      <EditFooter {...inputValues} />
    </form>
  );
};

export default EditOptions;
