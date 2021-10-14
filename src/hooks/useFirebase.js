import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
        const [user, setUser] = useState({});

        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();

        const signInUsingGoogle = () => {
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUser(result.user)
                        })

        }

        // Observe User State Change:
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                        if (user) {
                                setUser(user)
                        }
                        else {
                                setUser({})
                        }
                });
                return unsubscribe;
        }, [])

        // LogOut Function:
        const logOut = () => {
                signOut(auth)
                        .then(() => {

                        })
        }

        return {
                signInUsingGoogle,
                logOut,
                user
        }
}

export default useFirebase;
