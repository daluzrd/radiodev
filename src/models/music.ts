type author = {
    name: string
}

export type music = {
    id: number
    playlistId: number
    title: string
    authors: author[]
    soundcloudUrl: string
    duration: number
}
