import { createContext, ReactNode, useState } from 'react';
import { Dispatch } from 'react';

type UserType = {
    uid: string
    email: string
    displayName: string
    photoURL: string
}

type UserContextType = {
    user: UserType
    setUser: Dispatch<UserType>
}

type UserContextProviderParamsType = {
    children: ReactNode
}

const UserContext = createContext({} as UserContextType)

const UserContextProvider = ({children}: UserContextProviderParamsType) => {
    const [user, setUser] = useState({} as UserType)
    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider}