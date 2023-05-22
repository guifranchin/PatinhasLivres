import React, { createContext, useState } from "react";
import { Partner } from "../../models/partner";

export type PartnerContextProps = {
  partnerListState: Partner[];
  setPartnerListState: React.Dispatch<React.SetStateAction<Partner[]>>;
};

type PartnerContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  partnerListState: [],
  setPartnerListState: () => [{}],
};

const PartnerContext = createContext<PartnerContextProps>(DEFAULT_VALUES);

const PartnerContextProvider = ({ children }: PartnerContextProviderProps) => {
  const [partnerListState, setPartnerListState] = useState<Partner[]>([]);
  return (
    <PartnerContext.Provider
      value={{
        partnerListState,
        setPartnerListState,
      }}
    >
      {children}
    </PartnerContext.Provider>
  );
};

export default PartnerContext;
export { PartnerContextProvider };
