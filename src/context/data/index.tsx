import React, { createContext, useState, useContext } from "react";
import { IData } from "../../services/types";

interface IDataContext {
  datas: IData[];
  setDatas: (data: IData[]) => void;
}

const DataContext = createContext<IDataContext>({} as IDataContext);

export function DataProvider({ children }: { children: JSX.Element }) {
  const [datas, setDatas] = useState<IData[]>([]);

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
