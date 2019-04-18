import { auth, googleProvider, database } from '../firebaseConf'

const EMAIL_CHANGED = 'auth/EMAIL_CHANGED'
const PASS_CHANGED = 'auth/PASS_CHANGED'
const SET_USER = 'auth/SET_USER'

export const startListeningToAuthChangesAsyncActionCreator = (
    () => (dispatch, getState) => {
        auth.onAuthStateChanged(
            (user) => {
                console.log(user)
                dispatch(setUserActionCreator(user))

                if (user) {
                    dispatch(logUserLoginsAsyncActionCreator())
                } else {
                    //USER NOT LOGGED IN
                }
            }
        )
    }

)

export const logUserLoginsAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const userId = state.auth.user.uid

    database.ref(`jfddl7/users/${userId}/login`)
        .push({
            tomestamp: Date.now(),
        })
}

export const logInAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState()
    const email = state.auth.email
    const password = state.auth.password

    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('Zalogowano'))
        .catch((error) => console.log('Wystapil blad', error))
}

export const logInByGoogleAsyncActionCreator = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
        .then(() => console.log('Zalogowano'))
        .catch((error) => console.log('Wystapil blad', error))
}

export const logOut = () => (dispatch, getState) => {
    auth.signOut()
}

const setUserActionCreator = user => ({
    type: SET_USER,
    user,
})

export const emailChangedActionCreator = newValue => ({
    type: EMAIL_CHANGED,
    newValue,
})

export const passChangedActionCreator = newValue => ({
    type: PASS_CHANGED,
    newValue,
})



const initialState = {
    user: null,
    email: '',
    password: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.newValue,
            }
        case PASS_CHANGED:
            return {
                ...state,
                password: action.newValue,
            }
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}