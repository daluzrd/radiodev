import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { auth, firebase } from "../services/firebase"
import { UserContext } from "../contexts/user"

const useUser = () => {
    const history = useHistory()
    const { user, setUser } = useContext(UserContext)

    const signIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()

        const result = await auth.signInWithPopup(provider)

        if(result.user){
            const { uid, displayName, email, photoURL } = result.user;
            if(!displayName || !photoURL || !email || !uid){
                throw new Error('Missing informations from Google')
            }
            
            setUser({uid, displayName, email, photoURL})
        }        
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                const { uid, displayName, email, photoURL } = user;
                if(!displayName || !photoURL || !email){
                    throw new Error('Missing informations from Google')
                }
                
                setUser({uid, displayName, email, photoURL})
            } else {
                history.push('/Login')
            }
        })

        return () => { unsubscribe() }
    }, []) // eslint-disable-line

    return { user, signIn }
}

export default useUser