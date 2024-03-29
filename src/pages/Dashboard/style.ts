import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
	hasError: boolean
}

export const Title = styled.h1`
	font-size: 48px;
	margin-top: 80px;
	max-width: 450px;
	line-height: 76px;
`

export const Form = styled.form<FormProps>`
	margin-top: 40px;
	max-width: 700px;
	display: flex;

	input {
		flex: 1;
		height: 70px;
		padding: 0 24px;
		border: 0;
		border-radius: 5px 0 0 5px;
		color: #3a3a3a;
		font-size: 18px;
		border: 1px solid #fff;

		${(props) =>
			props.hasError &&
			css`
				border-color: #c53030;
			`}

		&::placeholder {
			color: #a8a8b3;
		}

		&:focus {
			outline: none;
		}
	}

	button {
		width: 210px;
		height: 70px;
		border-radius: 0 5px 5px 0;
		background: #267dff;
		border: 0;
		color: #fff;
		font-weight: 700;
		transition: background-color 0.6s;

		&:hover {
			background: ${shade(0.2, '#267DFF')};
		}
	}
`
export const Repository = styled.div`
	margin-top: 80px;
	max-width: 700px;

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

		img {
			width: 64px;
			height: 64px;
			border-radius: 50%;
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
export const Error = styled.span`
	display: block;

	color: #c53030;
	margin-top: 5px;
`
