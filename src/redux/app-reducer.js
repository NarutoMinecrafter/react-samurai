import { getMeThunk } from "./auth-reducer";

const INITIALIZED_SUCEES = 'app-reducer/INITIALIZED-SUCEES';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCEES: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initialisedSucces = () => ({ type: INITIALIZED_SUCEES })

export const initializeApp = () => async (dispath) => {
    dispath(getMeThunk()).then(() => dispath(initialisedSucces()))
}

export default appReducer