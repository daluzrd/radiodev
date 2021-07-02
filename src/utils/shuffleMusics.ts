import { music } from '../models/music'

export const shuffleMusics = (musics: music[]) => {
	if (musics.length > 1) {
		for (let i = musics.length - 1; i > 0; i--) {
			let temp = musics[i]
			let tempIndex = Math.floor(Math.random() * musics.length)
			musics[i] = musics[tempIndex]
			musics[tempIndex] = temp
		}
	}

	return musics
}
