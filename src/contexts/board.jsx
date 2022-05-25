import { createContext, useReducer } from 'react';
import { borderReducer } from '../contexts/board.jsx';
export const BoardContext = createContext();

 const BoardProvider= ({children})=>{

    const [boards, dispatchBoardAction] = useReducer(borderReducer, [])
    return(
        <BoardContext.Provider value= {{boards, dispatchBoardAction}}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardProvider;