import { createContext, Dispatch, ReactNode, useState } from 'react'
import { MusicType } from '../types/music'
import { PlaylistType } from '../types/playlist'

type AudioContextType = {
	actualMusic: MusicType
	actualPlaylist: PlaylistType
	musics: MusicType[]
	playlists: PlaylistType[]
	quickPlaylists: PlaylistType[]
	setActualMusic: Dispatch<MusicType>
	setActualPlaylist: Dispatch<PlaylistType>
	setMusics: Dispatch<MusicType[]>
	setPlaylists: Dispatch<PlaylistType[]>
	setQuickPlaylists: Dispatch<PlaylistType[]>
}

type AudioContextProviderType = {
	children: ReactNode
}

export const AudioContext = createContext({} as AudioContextType)

export const AudioContextProvider = ({
	children,
}: AudioContextProviderType) => {
	const [playlists, setPlaylists] = useState<PlaylistType[]>([])
	const [quickPlaylists, setQuickPlaylists] = useState([] as PlaylistType[])
	const [musics, setMusics] = useState<MusicType[]>([])
	const [actualMusic, setActualMusic] = useState({} as MusicType)
	const [actualPlaylist, setActualPlaylist] = useState({} as PlaylistType)

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
