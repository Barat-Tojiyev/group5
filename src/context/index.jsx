import React, { useState } from "react";
import { createContext } from "react";


export const productContext =createContext();

export const Context = ({children}) => {
    const [state,setState]=useState(0)
  return (
    <div>
        <productContext.Provider value={[state,setState]}>
          {
            children
          }
        </productContext.Provider>

    </div>
  )
}
