export const addTodo =(data)=>{
    console.log(data,'actions');
    return{
        type: 'ADD_TODO',
        payload: data
    }
} 
export const removeTodo = (data)=>{
    console.log(data,'actions');
    return{
        type: 'REMOVE_TODO',
        payload: data
    }
} 
export const toggleDarkMode = ()=>{
    // console.log(data,'actions');
    return{
        type: 'TOGGLE_DARK_MODE',
        payload: {}
    }
} 
