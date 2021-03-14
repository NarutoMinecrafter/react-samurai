import { getMeThunk } from "./auth-reducer"
import { BaseThunkType } from '../types/type'

const INITIALIZED_SUCEES = 'app-reducer/INITIALIZED-SUCEES'

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: initialisedSuccesActionType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCEES: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}
type initialisedSuccesActionType = { type: typeof INITIALIZED_SUCEES }
export const initialisedSucces = (): initialisedSuccesActionType => ({ type: INITIALIZED_SUCEES })


export const initializeApp = (): ThunkType => async (dispath) => {
    dispath(getMeThunk()).then(() => dispath(initialisedSucces()))
}

export default appReducer

type initialStateType = {
    initialized: bool
}

type ThunkType = BaseThunkType<initialisedSuccesActionType>
