import React, { createContext, useState } from 'react'
 export const ContextId = createContext(0)
export default function IdContext({children}) {
    const [id, setId] = useState(0)
  return (
    <ContextId.Provider value={{id, setId}}>
        {children}
    </ContextId.Provider>
  )
}
