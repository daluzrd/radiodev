import { useContext } from 'react'
import { MdFavorite } from 'react-icons/md'
import styled from 'styled-components'
import { AudioContext } from '../../contexts/audio'
import StationIcon from '../../assets/img/stationIcon.jpeg'

const Player = styled.footer`
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;

  background: var(--dark-gray);
  border-top: var(--gray);
  color: var(--light-gray);

  height: 7.5rem;
`

const StationSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 100%;

  > img {
    width: 5.5rem;
    height: 5.5rem;
  }

  > span {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

const ProgressBar = styled.section`
  justify-self: center;
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  span { 
    width: 100%;
    height: 5px;

    background: var(--purple);
  }
`

const LikeSection = styled.section`
  width: 2rem;
  height: 2rem;

  display: flex;
  `

  const LikeIcon = styled(MdFavorite)`
  width: 100%;
  height: 100%;
`

const Iframe = styled.iframe`
  display: none;
`

export default () => {
  const { actualMusic, actualPlaylist } = useContext(AudioContext)

  return (    
    <Player>
    <StationSection>
      <img src={StationIcon} />
      <span>
        <span>Sertanejo</span>
        <span>Rick e Renner</span>
      </span>
    </StationSection>
    <ProgressBar>
      <div>Rick e Renner - Ainda tô aí</div>
      <span></span>
    </ProgressBar>
    <LikeSection>
      <LikeIcon />
    </LikeSection>
    <Iframe 
      scrolling="no" 
      frameBorder="no" 
      allow="autoplay" 
      src={`${actualMusic.soundcloudUrl}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`} 
    />
  </Player>
  )
}