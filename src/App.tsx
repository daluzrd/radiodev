import { MdEqualizer, MdFavorite, MdHome, MdLibraryMusic, MdMoreHoriz, MdSearch } from 'react-icons/md'
import styled from 'styled-components';

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

const App = styled.div`
  display: flex;
`

const Sidebar = styled.aside`
  position: fixed;
  right: 0;
  background: var(--black);

  height: calc(100vh - 7.5rem);
  width: 18rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > section {
    padding: 0.5rem;
    height: 50%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const UserSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: bold;
  color: var(--light-gray);

  > section {    
    > a {
      color: var(--light-gray);
      text-decoration: none;
    }
  }
`

const EllipsisIcon = styled(MdMoreHoriz)`
  width: 2rem;
  height: 2rem;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  
  > a {
    display: flex;
    align-items: center;
    
    text-decoration: none;
    color: var(--light-gray);
    
    > p {
      font-weight: bold;
      margin-left: 1rem;
    }
  }
`

const HomeIcon = styled(MdHome)`
  width: 2rem;
  height: 2rem;
`

const SearchIcon = styled(MdSearch)`
  width: 2rem;
  height: 2rem;
`

const LibraryIcon = styled(MdLibraryMusic)`
  width: 2rem;
  height: 2rem;
`

const EqualizerIcon = styled(MdEqualizer)`
  width: 2rem;
  height: 2rem;
`

export default () => {
  return (
    <App>
      <main>
        <ul>
          <li>Station 1</li>
          <li>Station 2</li>
          <li>Station 3</li>
          <li>Station 4</li>
          <li>Station 5</li>
          <li>Station 6</li>
          <li>Station 7</li>
          <li>Station 8</li>
          <li>Station 9</li>
          <li>Station 10</li>
        </ul>
      </main>
      <Sidebar>
        <section>
          <UserSection>
            <section>
              <div></div>
              <a href="#">Lucas da Luz</a>
            </section>
            <EllipsisIcon />
          </UserSection>
          <Nav>
            <a href="#">
              <HomeIcon />
              <p>Home</p>
            </a>
            <a href="#">
              <SearchIcon />
              <p>Search</p>
            </a>
            <a href="#">
              <LibraryIcon />
              <p>Liked Stations</p>
            </a>
            <a href="#">
              <EqualizerIcon />
              <p>Your Rooms</p>
            </a>
          </Nav>
        </section>
        <section>
          <span>Quick Stations</span>
          <ul>
            <li>
              <span>
                <img />
                <p>Station 1</p>
              </span>
            </li>            
            <li>
              <span>
                <img />
                <p>Station 2</p>
              </span>
            </li>            
            <li>
              <span>
                <img />
                <p>Station 3</p>
              </span>
            </li>            
            <li>
              <span>
                <img />
                <p>Station 4</p>
              </span>
            </li>            
            <li>
              <span>
                <img />
                <p>Station 5</p>
              </span>
            </li>
          </ul>
        </section>
      </Sidebar>
      <Player>
        <section>
          <img src="" />
          <span>
            Sertanejo
          </span>
        </section>
        <ProgressBar>
          <div>Rick e Renner - Ainda tô aí</div>
          <span></span>
        </ProgressBar>
        <LikeSection>
          <LikeIcon />
        </LikeSection>
      </Player>
    </App>
  );
}
