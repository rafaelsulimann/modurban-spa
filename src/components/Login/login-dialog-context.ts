import { createContext } from "react";

export type ContextLoginDialogContextType = {
  isOpen: boolean | undefined;
  setIsOpen: (isOpen: boolean | undefined) => void;
};

export const ContextDialogLogin = createContext<ContextLoginDialogContextType>({
  isOpen: undefined,
  setIsOpen: () => {},
});
