import { MdPlayCircleFilled } from "react-icons/md"
import styled from "styled-components"
import StationIcon from '../../assets/img/stationIcon.jpeg'

const Main = styled.main`
width: calc(100% - 18rem);
height: calc(100vh - 7.5rem);
overflow-y: auto;
padding: 4rem;
`

const StationList = styled.ul`
display: grid;
grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);

width: 100%;
height: fit-content;
gap: 2rem;
overflow-wrap: wrap;
`

const StationItem = styled.li`
display: flex;
align-items: flex-start;
gap: 1rem;

background: var(--dark-gray);

> img {
  width: 10rem;
  height: 100%;
}

> a {
  margin-top: 1rem;

  font-size: 1.5rem;
  color: var(--extra-light-gray);

  :hover {
    text-decoration: underline;
  }
}
`

const PlayButton = styled(MdPlayCircleFilled)`
color: var(--purple);

height: 3rem;
width: 3rem;

cursor: pointer;
transition: 200ms;

:hover {
  transform: scale(1.2);
}

align-self: center;
`

export default () => {
  return (
    <Main>
      <StationList>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 1</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 2</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 3</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 4</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 5</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 6</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 7</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 8</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 9</a>
          <PlayButton />
        </StationItem>
        <StationItem>
          <img src={StationIcon} />
          <a href='#'>Station 10</a>
          <PlayButton />
        </StationItem>
      </StationList>        
    </Main>
  )
}