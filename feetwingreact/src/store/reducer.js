import * as actionType from './actions';
const intitialState={
    sideDrawer:false,
}

const reducer =(state=intitialState,action)=>{
    switch(action.type)
    {
        case actionType.SET_SIDEDRAWER:
            return{
                ...state,
                sideDrawer:!state.sideDrawer
            }
        default:{
            return {
                ...state
            }
        }
    }
}

export default reducer;