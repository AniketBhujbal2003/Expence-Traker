// reducer is function that taks 2 parameters (state,action) action changes  old state to new state
const contextReducer=(state, action)=>{
    let transactions;
    switch(action.type){
        case 'DELETE_TRANSACTION':
            transactions= state.filter((t)=>{ t.id != action.paylode})
            return transactions;

        case 'ADD_TRANSACTION':
            let newT= [ action.paylode, ...state];
            return newT;

        default:
           return state;
    }
}

export default contextReducer