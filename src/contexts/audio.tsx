import { createContext, ReactNode, useEffect, useState } from 'react'
import { music } from '../models/music'
import { playlist } from '../models/playlist'
import { getMusicsByPlaylistId } from '../services/jsonServer'
import { shuffleMusics } from '../utils/shuffleMusics'

type AudioContextType = {
    isPlaying: boolean
    actualMusic: music
    actualPlaylist: playlist
    play: () => void
    listenPlaylist: (playlist: playlist) => void
}

type AudioContextProviderType = {
    children: ReactNode
}

export const AudioContext = createContext({} as AudioContextType)

export const AudioContextProvider = ({children}: AudioContextProviderType) => {
    debugger
    const [isPlaying, setIsPlaying] = useState(false)
    const [musics, setMusics] = useState<music[]>([])
    const [actualMusic, setActualMusic] = useState({} as music)
    const [actualPlaylist, setActualPlaylist] = useState({} as playlist)

    const play = () => setIsPlaying(!isPlaying)

    const listenPlaylist = async (playlist: playlist) => {
        setActualPlaylist(playlist)
        setMusics(await getMusicsByPlaylistId(playlist.id))
    }

    useEffect(() => {
        debugger;
        for(let i = 0; i < musics.length; i++) {
            setActualMusic(musics[i])
            setTimeout(() => {}, musics[i].duration)
        }
    }, [musics])

    return (
        <AudioContext.Provider 
            value={{ 
                isPlaying,
                actualMusic,
                actualPlaylist,
                play,
                listenPlaylist
            }}
        >
            {children}
        </AudioContext.Provider>
    )
}