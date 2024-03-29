import styled from 'styled-components'

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: color 0.8s;
		color: #a8a8b3;
		&:hover {
			color: #666;
		}

		svg {
			margin-right: 4px;
		}
	}
`

export const RepositoryInfo = styled.section`
	margin-top: 80px;

	header {
		display: flex;
		align-items: center;

		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}

		div {
			margin-left: 24px;

			strong {
				font-size: 36px;
				color: #3d3d4d;
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		margin-top: 40px;

		li {
			& + li {
				margin-left: 80px;
			}
			strong {
				display: block;
				font-size: 36px;
				color: #3d3d4d;
			}
			span {
				display: block;
				margin-top: 4px;
				color: #6c6c80;
			}
		}
	}
`

export const Issues = styled.div`
	margin-top: 80px;

	a {
		background: #fff;
		border-radius: 8px;
		width: 100%;
		padding: 24px;
		display: block;
		text-decoration: none;
		color: #a8a8b3;

		display: flex;
		align-items: center;
		transition: transform 0.5s;

		&:hover {
			transform: translateX(15px);
		}

		& + a {
			margin-top: 16px;
		}

		div {
			margin: 0 16px;
			strong {
				font-size: 20px;
				color: #3d3d4d;
			}
			p {
				font-size: 18px;
				color: a8a8b3;
				margin-top: 4px;
			}
		}

		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`
