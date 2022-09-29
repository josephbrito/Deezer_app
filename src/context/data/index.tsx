import { createContext, useState, useContext } from "react";

interface IDataContext {
  datas: string;
  setDatas: (data: string) => void;
}

const DataContext = createContext<IDataContext>({} as IDataContext);

export function DataProvider({ children }: { children: JSX.Element }) {
  const [datas, setDatas] = useState<string>("");

  return (
    <DataContext.Provider value={{ datas, setDatas }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const { datas, setDatas } = useContext(DataContext);

  return { datas, setDatas };
}
