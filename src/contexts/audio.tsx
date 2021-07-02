import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import { music } from '../models/music'
import { playlist } from '../models/playlist'

type AudioContextType = {
	actualMusic: music
	actualPlaylist: playlist
	musics: music[]
	playlists: playlist[]
	quickPlaylists: playlist[]
	setActualMusic: Dispatch<music>
	setActualPlaylist: Dispatch<playlist>
	setMusics: Dispatch<music[]>
	setPlaylists: Dispatch<playlist[]>
	setQuickPlaylists: Dispatch<playlist[]>
}

type AudioContextProviderType = {
	children: ReactNode
}

export const AudioContext = createContext({} as AudioContextType)

export const AudioContextProvider = ({
	children,
}: AudioContextProviderType) => {
	const [playlists, setPlaylists] = useState<playlist[]>([])
	const [quickPlaylists, setQuickPlaylists] = useState([] as playlist[])
	const [musics, setMusics] = useState<music[]>([])
	const [actualMusic, setActualMusic] = useState({} as music)
	const [actualPlaylist, setActualPlaylist] = useState({} as playlist)

	return (
		<AudioContext.Provider
			value={{
				actualMusic,
				actualPlaylist,
				playlists,
				quickPlaylists,
				musics,
				setMusics,
				setActualMusic,
				setActualPlaylist,
				setPlaylists,
				setQuickPlaylists
			}}
		>
			{children}
		</AudioContext.Provider>
	)
}
