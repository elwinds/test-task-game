import * as React from "react";
import classes from "./Options.module.scss";
import Parameters from "./Parameters";
import Skills from "./Skills";

const enum ActiveTabState {
  Parameters = "Параметры",
  Skills = "Скиллы",
}

const Options: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(ActiveTabState.Parameters);

  return (
    <>
      <div className={classes.container}>
        <button
          className={
            activeTab === ActiveTabState.Parameters
              ? [classes.btnTab, classes["btnTab--active"]].join(" ")
              : classes.btnTab
          }
          onClick={() => setActiveTab(ActiveTabState.Parameters)}
        >
          {ActiveTabState.Parameters}
        </button>
        <button
          className={
            activeTab === ActiveTabState.Skills
              ? [classes.btnTab, classes["btnTab--active"]].join(" ")
              : classes.btnTab
          }
          onClick={() => setActiveTab(ActiveTabState.Skills)}
        >
          {ActiveTabState.Skills}
        </button>
      </div>
      {activeTab === ActiveTabState.Parameters && <Parameters />}
      {activeTab === ActiveTabState.Skills && <Skills />}
    </>
  );
};

export default Options;
