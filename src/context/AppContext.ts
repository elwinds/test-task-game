import * as React from 'react';

type Parameters = {
    power: number;
    agility: number;
    intellect: number;
    charisma: number;
    vitality: number;
}

interface AppContext {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>> | null;
  parameters: Parameters;
  setParameters: React.Dispatch<React.SetStateAction<Parameters>> | null;
}

const defaultValue: AppContext = {
  name: "Имя",
  setName: null,
  parameters: {
    power: 0,
    agility: 0,
    intellect: 0,
    charisma: 0,
    vitality: 3,
  },
  setParameters: null,
};
export const AppContext = React.createContext<AppContext>(defaultValue);
