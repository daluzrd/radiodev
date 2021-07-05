export type AuthorType = {
	name: string
}

export type MusicType = {
	id: number
	playlistId: number
	title: string
	authors: AuthorType[]
	soundcloudUrl: string
	duration: number
}
