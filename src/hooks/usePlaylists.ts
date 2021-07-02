import { useContext, useEffect } from 'react'
import { AudioContext } from '../contexts/audio'
import { getMusicsByPlaylistId, getPlaylists, getTop4Playlists, updatePlaylistPlayedTimes } from '../services/jsonServer'
import { shuffleMusics } from '../utils/shuffleMusics'
import { playlist } from '../models/playlist'
import useMusics from './useMusics'


const usePlaylists = () => {
	const { actualPlaylist, playlists, quickPlaylists, setActualPlaylist, setPlaylists, setQuickPlaylists } = useContext(AudioContext)
    const { updateMusics }  = useMusics()

	const listenPlaylist = async (playlist: playlist) => {
		setActualPlaylist(playlist)
		updateMusics(shuffleMusics(await getMusicsByPlaylistId(playlist.id)))
	}

    const updatePlaylists = async () => {
        setPlaylists(await getPlaylists())
        setQuickPlaylists(await getTop4Playlists())
    }

	useEffect(() => {
		updatePlaylists()
	}, [])

	useEffect(() => {
		updatePlaylistPlayedTimes(actualPlaylist)
	}, [actualPlaylist])

    return {actualPlaylist, listenPlaylist, playlists, quickPlaylists}
}

export default usePlaylists