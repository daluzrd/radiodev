import { createContext, ReactNode, useState } from 'react'

type AudioContextType = {
    isPlaying: boolean
    play: () => void
}

type AudioContextProviderType = {
    children: ReactNode
}

export const AudioContext = createContext({} as AudioContextType)

export const AudioContextProvider = ({children}: AudioContextProviderType) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const play = () => setIsPlaying(!isPlaying)

    return (
        <AudioContext.Provider value={{ isPlaying, play }}>
            {children}
        </AudioContext.Provider>
    )
}