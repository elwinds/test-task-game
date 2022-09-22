import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import EditPage from "./pages/edit-page/EditPage";
import { SkillsContext } from "./context/SkillsContext";
import { AppContext } from "./context/AppContext";

function App() {
  const [name, setName] = React.useState("Junior Developer");
  const [parameters, setParameters] = React.useState({
    power: 0,
    agility: 0,
    intellect: 0,
    charisma: 0,
    vitality: 3,
  });

  // setParameters({...parameters, power: 5})
  const [skills, setSkills] = React.useState({
    attack: 0,
    stealth: 0,
    archery: 0,
    learnability: 0,
    survival: 0,
    medicine: 0,
    intimidation: 0,
    insight: 0,
    appearance: 0,
    manipulation: 0
  });


  // const [attack, setAttack] = React.useState(0);
  // const [stealth, setStealth] = React.useState(0);
  // const [archery, setArchery] = React.useState(0);
  // const [learnability, setLearnability] = React.useState(0);
  // const [survival, setSurvival] = React.useState(0);
  // const [medicine, setMedicine] = React.useState(0);
  // const [intimidation, setIntimidation] = React.useState(0);
  // const [insight, setInsight] = React.useState(0);
  // const [appearance, setAppearance] = React.useState(0);
  // const [manipulation, setManipulation] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        parameters,
        setParameters,
      }}
    >
      <SkillsContext.Provider
        value={{
          skills,
          setSkills,
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SkillsContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
