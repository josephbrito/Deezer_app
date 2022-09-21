import { createContext, useContext, useState } from "react";

interface IText {
  text: string;
  setText: (text: string) => void;
}

const ContextValue = createContext<IText>({} as IText);

export function ContextProvider({ children }: { children: JSX.Element }) {
  const [text, setText] = useState<string>("");

  return (
    <ContextValue.Provider value={{ text, setText }}>
      {children}
    </ContextValue.Provider>
  );
}

export function useContextProvider() {
  const { text, setText } = useContext(ContextValue);

  return { text, setText };
}
