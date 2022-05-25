import { createContext, useReducer } from 'react';
import { taskReducer } from '../contexts/task.jsx';
export const TaskContext = createContext();

const TaskProvider= ({children})=>{

    const [tasks, dispatchTaskAction] = useReducer(taskReducer, [])
    return(
        <TaskContext.Provider value= {{tasks, dispatchTaskAction}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;