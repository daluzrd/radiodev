import { useContext, useEffect } from 'react'
import { AudioContext } from '../contexts/audio'
import useMusics from './useMusics'
import useUser from './useUser'
import { getMusicsByPlaylistId, getPlaylists, getTop4Playlists, updatePlaylistPlayedTimes } from '../services/jsonServer'
import { shuffleMusics } from '../utils/shuffleMusics'
import { PlaylistType } from '../types/playlist'


const usePlaylists = () => {
	const { user } = useUser()
	const { actualPlaylist, playlists, quickPlaylists, setActualPlaylist, setPlaylists, setQuickPlaylists } = useContext(AudioContext)
    const { updateMusics }  = useMusics()

	const listenPlaylist = async (playlist: PlaylistType) => {
		setActualPlaylist(playlist)
		updateMusics(shuffleMusics(await getMusicsByPlaylistId(playlist.id)))
	}

    const updatePlaylists = async () => {
        setPlaylists(await getPlaylists())
    }
	
	const updateQuickPlaylists = async () => {
		if(user) setQuickPlaylists(await getTop4Playlists())
	}

	useEffect(() => {
		updatePlaylists()
	}, []) // eslint-disable-line

	useEffect(() => {
		updateQuickPlaylists()
	}, [user]) // eslint-disable-line

	useEffect(() => {
		updatePlaylistPlayedTimes(actualPlaylist)
	}, [actualPlaylist])

    return {actualPlaylist, listenPlaylist, playlists, quickPlaylists}
}

export default usePlaylists