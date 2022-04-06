import { 
    firebase, 
    googleAuthProvider,
    facebookAuthProvider, 
    githubAuthProvider,
    twitterAuthProvider
} from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const facebookLogin= () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
}

export const githubLogin= () => {
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
    }
}

export const twitterLogin= () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterAuthProvider);
    }
}



export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};