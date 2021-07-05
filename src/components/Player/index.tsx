import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { AuthorType } from '../../types/music'
import styled from 'styled-components'
import useMusics from '../../hooks/useMusics'
import usePlaylists from '../../hooks/usePlaylists'
import useUser from '../../hooks/useUser'
import { getPlaylistWasLiked } from '../../services/jsonServer'
import { useEffect, useState } from 'react'

const Player = styled.footer`
	position: fixed;
	bottom: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1rem;

	background: var(--dark-gray);
	border-top: solid 1px var(--gray);
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

	font-size: 2rem;

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

	:hover {
		cursor: pointer;
	}
`

const LikeIcon = styled(MdFavorite)`
	width: 100%;
	height: 100%;

	fill: var(--purple);
`

const LikeIconBorder = styled(MdFavoriteBorder)`
	width: 100%;
	height: 100%;
`

const Iframe = styled.iframe`
	display: none;
`

// eslint-disable-next-line
export default () => {
	const { user } = useUser();
	const { actualMusic } = useMusics()
	const { actualPlaylist } = usePlaylists()
	const [playlistWasLiked, setPlaylistWasLiked] = useState(false)

	console.log(user)

	const returnAuthor = (author: AuthorType) => {
		if (actualMusic.authors) {
			const indexOfAuthor = actualMusic.authors.indexOf(author)

			if (indexOfAuthor < actualMusic.authors.length - 1) {
				return `${author.name}, `
			} else if (indexOfAuthor === actualMusic.authors.length - 1) {
				return author.name
			}
		}
	}

	const getIfLiked = async () => {
		setPlaylistWasLiked(await getPlaylistWasLiked(actualPlaylist.id, user.uid))
	}

	useEffect(() => {
		getIfLiked()
	}, [actualPlaylist, user]) // eslint-disable-line

	return (
		<Player>
			<StationSection>
				{actualPlaylist.thumbnail ? (
					<img src={`${process.env.PUBLIC_URL}${actualPlaylist.thumbnail}`} alt="Thumbnail da playlist" />
				) : (
					''
				)}
				<span>
					<span>{actualPlaylist.title}</span>
					<span>
						{actualMusic.authors
							? actualMusic.authors.map(author => returnAuthor(author))
							: ''}
					</span>
				</span>
			</StationSection>
			<ProgressBar>
				<div>{actualMusic.title ? actualMusic.title : ''}</div>
			</ProgressBar>
			<LikeSection>
				{ playlistWasLiked ? <LikeIcon /> : <LikeIconBorder />}
			</LikeSection>
			<Iframe
				width='100%'
				height='100%'
				scrolling='no'
				frameBorder='no'
				allow='autoplay'
				src={`https://w.soundcloud.com/player/?url=${actualMusic.soundcloudUrl}&color=%239a30fa&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
			/>
		</Player>
	)
}

