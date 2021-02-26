import * as actionType from './actions';
const intitialState={
    sideDrawer:false,
    showOverlay:false,
}

const reducer =(state=intitialState,action)=>{
    switch(action.type)
    {
        case actionType.SET_SIDEDRAWER:
            return{
                ...state,
                sideDrawer:!state.sideDrawer
            }
        case actionType.SET_OVERLAY:
            return {
                ...state,
                showOverlay:!state.showOverlay
            }
        default:{
            return {
                ...state
            }
        }
    }
}

export default reducer;