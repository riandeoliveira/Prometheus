"use client";

import { ReactNode, createContext, useState } from "react";
import { State } from "types/state";

type CounterContextProviderProps = {
  children: ReactNode;
};

const initialState: State.Counter = {
  value: 0,
  increment: () => {},
};

export const CounterContext = createContext<State.Counter>(initialState);

export const CounterContextProvider = ({
  children,
}: CounterContextProviderProps): JSX.Element => {
  const [value, setValue] = useState<number>(0);

  const increment = (): void => {
    setValue((state) => state + 1);
  };

  const data: State.Counter = {
    value,
    increment,
  };

  return (
    <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
  );
};
