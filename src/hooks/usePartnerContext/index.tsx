import { useContext } from "react";
import PartnerContext, { PartnerContextProps } from "../../contexts/Partner";

const usePartnerContext = (): PartnerContextProps => {
    const partnerContext = useContext<PartnerContextProps>(PartnerContext);
    
    return partnerContext;
}

export default usePartnerContext;