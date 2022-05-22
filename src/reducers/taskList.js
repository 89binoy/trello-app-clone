export const taskListReducer = (taskLists, action ) => {
    switch (action.type){
        case 'CREATE_LIST' : {
            const taskList = {
                id: Date.now(),
                title: action.playload.title,
                tasks: [],
                boardId: action.playload.boardId
            }
            return [...taskLists, taskList]

        }

        case 'UPDATE_LIST' : {

            return taskLists.map((taskList)=>{
                if(taskList.id===action.playload.id){
                    taskList.title = action.playload.title || taskList.title
                }

                return taskList;
            })

        }

        case 'DELETE_LIST' : {
            return taskLists.filter(item=> item.id !== action.playload.id)

        }

        case 'ADD_TASK_TO_LIST' : {

            return taskLists.map((list)=>{
                if (list.id === action.playload.id){
                    list.tasks.push(action.playload.taskId)
                };

                return list
            })

        }

        case 'REMOVE_TASK_IF_FROM_LIST' : {
            return taskLists.map((list)=>{
                if(list.id=== action.playload.id){
                    list.tasks = list.tasks.filter(task => task.id !== action.playload.taskId)
                }

                return list
            })

        }

        case 'CHANGR_BOARD_ID_OF_LIST' : {

            return taskLists.map((list)=>{
                if(list.id===action.playload.id){
                    list.boardId=action.playload.boardId;
                }
                return list
            })

            }


        default : {
            return taskLists;
        }
    }
}