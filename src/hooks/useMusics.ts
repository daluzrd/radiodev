import { useContext, useEffect } from "react"
import { AudioContext } from "../contexts/audio"
import { MusicType } from "../types/music"


const useMusics = () => {
	const { actualMusic, musics, setActualMusic, setMusics } = useContext(AudioContext)
	
    const updateMusics = (newMusics: MusicType[]) => {
		debugger
		setMusics(newMusics)
	}

    const nextTrack = (index: number) => {
		debugger
		setActualMusic(musics[index])
	}

	useEffect(() => {
		if (musics.length > 0) nextTrack(0)
	}, [musics]) // eslint-disable-line

	useEffect(() => {
		const actualMusicIndex = musics.indexOf(actualMusic)
		if (actualMusicIndex !== musics.length - 1) {
			setTimeout(
				() => nextTrack(actualMusicIndex + 1),
				actualMusic.duration * 1000
			)
		}
	}, [actualMusic]) // eslint-disable-line

    return {actualMusic, updateMusics}
}

export default useMusics