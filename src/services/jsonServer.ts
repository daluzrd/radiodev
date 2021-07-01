import api from './api'
import { playlist } from '../models/playlist'

const getPlaylists = () => {
	const response = api
		.get('playlists?_sort=playedTimes&_order=desc')
		.then(response => response.data)

	return response
}

const getTop4Playlists = () => {
	const response = api
		.get('playlists?_sort=playedTimes&_order=desc&_limit=4')
		.then(response => response.data)

	return response
}

const getMusics = async () => {
	const response = await api.get('musics').then(response => response.data)

	return response
}

const getMusicsByPlaylistId = async (playlistId: number) => {
	const response = await api
		.get(`musics?playlistId=${playlistId}`)
		.then(response => response.data)

	return response
}

const updatePlaylistPlayedTimes = async (station: playlist) => {
	station.playedTimes++
	const response = await api
		.put(`playlists/${station.id}`, station)
		.then(response => response.data)

	return response
}

export {
	getPlaylists,
	getMusics,
	getMusicsByPlaylistId,
	getTop4Playlists,
	updatePlaylistPlayedTimes,
}
