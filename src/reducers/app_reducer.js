import { 
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE
} from '../actions';

const reducer = (state,action) => {
    if(action.type === SIDEBAR_OPEN){
        
        return {...state,isOpen:true};
    }
    
    if(action.type === SIDEBAR_CLOSE){
        
        return {...state,isOpen:false};
    }
    
    throw new Error(`No action is matched in ${action.type}`);
}

export default reducer;