export const pendingTasks = [{id:0, term:"First", isCompleted:false, isEditMode:false},
                         {id:1, term:"Second", isCompleted:false, isEditMode:false},
                         {id:2, term:"Third", isCompleted:false, isEditMode:false},
                         {id:3, term:"Fourth", isCompleted:false, isEditMode:false}]

export const somePending = pendingTasks.map((task) => task.id===1?{...task, isCompleted:true}: task);

export const allCompleted = pendingTasks.map((task) => ({...task, isCompleted:true}))
export const editMode = pendingTasks.map((task) => task.id===2?{...task, isEditMode:true}:task)