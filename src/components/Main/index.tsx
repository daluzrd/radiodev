import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AudioContext } from '../../contexts/audio'
import { MdPauseCircleFilled, MdPlayCircleFilled } from 'react-icons/md'
import StationIcon from '../../assets/img/stationIcon.jpeg'
import { playlist } from '../../models/playlist'
import { getPlaylists } from '../../services/jsonServer'

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

const PauseButton = styled(MdPauseCircleFilled)`
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
	const { isPlaying, playlists, listenPlaylist } = useContext(AudioContext)

	return (
		<Main>
			<StationList>
				{playlists.length ? (
					playlists.map(playlist => {
						return (
							<StationItem key={`${playlist.title}${playlist.id}`}>
								<img src={`${process.env.PUBLIC_URL}${playlist.thumbnail}`} />
								<Link to='#'>{playlist.title}</Link>
								{isPlaying ? (
									<PauseButton
										onClick={() => {
											listenPlaylist(playlist)
										}}
									/>
								) : (
									<PlayButton
										onClick={() => {
											listenPlaylist(playlist)
										}}
									/>
								)}
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
