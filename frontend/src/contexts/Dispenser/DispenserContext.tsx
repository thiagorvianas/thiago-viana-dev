import { createContext } from 'react';
import { Dispenser } from '../../types/Dispenser';

export type DispenserContextType = {
  dispenser: Dispenser;
};

export const DispenserContext = createContext<DispenserContextType>(null!);
