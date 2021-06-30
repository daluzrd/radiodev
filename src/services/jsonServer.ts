import api from './api'

const getPlaylists = () => {
    const response = api.get('playlists')
        .then(response => response.data)

    return response
}

const getMusics = async () => {
    const response = await api.get('musics')
        .then(response => response.data)

    return response
}

const getMusicsByPlaylistId = async (playlistId: number) => {
    const response = await api.get(`musics?playlistId=${playlistId}`)
        .then(response => response.data)

    return response
}

export { getPlaylists, getMusics, getMusicsByPlaylistId }