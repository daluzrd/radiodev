import api from './api'

const getPlaylists = () => {
    const response = api.get('playlists')
        .then(response => response.data)

    return response
}

const getMusics = async () => {
    const response = await api.get('music')
        .then(response => response.data)

    return response
}

export { getPlaylists, getMusics }