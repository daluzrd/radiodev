import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdPauseCircleFilled, MdPlayCircleFilled } from 'react-icons/md'
import usePlaylists from '../../hooks/usePlaylists'

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
	justify-content: space-between;

	background: var(--dark-gray);	
`

const StationData = styled.div`
	display: flex;
	gap: 1rem;

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
	margin-right: 2rem;

	cursor: pointer;
	transition: 200ms;

	:hover {
		transform: scale(1.2);
	}

	align-self: center;
`

const PauseButton = styled(MdPauseCircleFilled)`
	color: var(--purple);

	height: 3rem;
	width: 3rem;
	margin-right: 2rem;

	cursor: pointer;
	transition: 200ms;

	:hover {
		transform: scale(1.2);
	}

	align-self: center;
`

export default () => {
	const { playlists, listenPlaylist } = usePlaylists();

	return (
		<Main>
			<StationList>
				{playlists.length ? (
					playlists.map(playlist => {
						return (
							<StationItem key={`${playlist.title}${playlist.id}`}>
								<StationData>
									<img src={`${process.env.PUBLIC_URL}${playlist.thumbnail}`} />
									<Link to='#'>{playlist.title}</Link>
								</StationData>
								<PlayButton
										onClick={() => {
											listenPlaylist(playlist)
										}}
									/>
							</StationItem>
						)
					})
				) : (
					<></>
				)}
			</StationList>
		</Main>
	)
}
