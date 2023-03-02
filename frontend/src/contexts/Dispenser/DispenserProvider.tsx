import { useState } from 'react';
import { Dispenser } from '../../types/Dispenser';
import { DispenserContext } from './DispenserContext';

export const DispenserProvider = ({ children }: { children: JSX.Element }) => {
  const [dispenser, setDispenser] = useState<Dispenser>({ title: 'test', type: 'test' });

  return(
    <DispenserContext.Provider value={{ dispenser }}>
        { children }
    </DispenserContext.Provider>  
  );
};
