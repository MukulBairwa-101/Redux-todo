const initialState = {
    TODOS:[]
}
const todoReducer = (state = initialState , action)=>{
    switch(action.type){
        case 'ADD_TODO':
            console.log(action.payload,'reducer');
            console.log(state.TODOS,'list')
            return {
                ...state,
                TODOS:[...state.TODOS,{
                    id:state.TODOS.length + 1,
                    text:action.payload
                }]
            }
        case 'REMOVE_TODO':
            console.log(action.payload);
                let filteredList = state.TODOS.filter(todo => todo.id !== action.payload.id)
                console.log(filteredList,'remove')
            return {
                    ...state,
                    TODOS:filteredList
                } 
            
        default:
            return state;
    }
}
export default todoReducer;