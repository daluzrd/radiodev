import { music } from "../models/music";

export const shuffleMusics = (musics: music[]) => {
    for(let i = musics.length; i > 0; i--){
        let temp = musics[i]
        let tempIndex = Math.floor(Math.random() * musics.length)
        musics[i] = musics[tempIndex]
        musics[tempIndex] = temp
    }

    return musics;
}