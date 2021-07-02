import { useContext, useEffect } from "react"
import { AudioContext } from "../contexts/audio"
import { music } from "../models/music"


const useMusics = () => {
	const { actualMusic, musics, setActualMusic, setMusics } = useContext(AudioContext)
	
    const updateMusics = (newMusics: music[]) => {
		debugger
		setMusics(newMusics)
	}

    const nextTrack = (index: number) => {
		debugger
		setActualMusic(musics[index])
	}

	useEffect(() => {
		if (musics.length > 0) nextTrack(0)
	}, [musics])

	useEffect(() => {
		const actualMusicIndex = musics.indexOf(actualMusic)
		if (actualMusicIndex !== musics.length - 1) {
			setTimeout(
				() => nextTrack(actualMusicIndex + 1),
				actualMusic.duration * 1000
			)
		}
	}, [actualMusic])

    return {actualMusic, updateMusics}
}

export default useMusics