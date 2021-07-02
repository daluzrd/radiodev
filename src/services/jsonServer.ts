import api from './api'
import { PlaylistType } from '../types/playlist'

const getPlaylists = () => {
	const response = api
		.get('playlists?_sort=playedTimes&_order=desc')
		.then(response => response.data)

	return response
}

const getPlaylistById = (id: number) => {
	const response = api
		.get(`playlists?id=${id}&_sort=playedTimes&_order=desc`)
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

const getLikedPlaylists = async (uid: string) => {
	const likedPlaylists: PlaylistType[] = []
	const response = await api
		.get(`likedPlaylists?uid=${uid}`)
		.then(response => response.data)

	if(response){
		for(let i = 0; i < response.length; i++){
			likedPlaylists.push(await getPlaylistById(response[i].playlistId))
		}
	}

	return likedPlaylists
}

const getPlaylistWasLiked = async (playlistId: number, uid: string) => {
	const response = await api
		.get(`likedPlaylists?uid=${uid}&playlistId=${playlistId}`)
		.then(response => {
			console.log(response.data)
			if(response.data.length > 0) return true
			else return false
		})

	
	return response
}

const updatePlaylistPlayedTimes = async (station: PlaylistType) => {
	station.playedTimes++
	const response = await api
		.put(`playlists/${station.id}`, station)
		.then(response => response.data)

	return response
}

export {
	getLikedPlaylists,
	getMusics,
	getMusicsByPlaylistId,
	getPlaylists,
	getPlaylistWasLiked,
	getTop4Playlists,
	updatePlaylistPlayedTimes,
}
