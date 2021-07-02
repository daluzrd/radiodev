import { FormEvent, useContext } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import useUser from "../hooks/useUser"
import googleLogo from '../assets/img/google-logo.svg'

const Form = styled.form`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-size: 1.5rem;
    color: var(--light-gray);
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem 1rem;
    background: var(--dark-gray);
    border: none;
    border-radius: 5px;

    text-align: center;
    color: var(--extra-light-gray);

    transition: 200ms;

    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const Login = () => {
    const history = useHistory()
    const { signIn } = useUser()

    const login = async (event: FormEvent) => {
        event.preventDefault()
        await signIn()
        history.push('/Main')
    }

    return (
        <Form onSubmit={login}>
            <Button type="submit">
                <img src={googleLogo} />
                <span>Sign in with Google</span>
            </Button>
        </Form>
    )
}