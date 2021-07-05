import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --purple: #9a30fa;

        --black: #282828;

        --extra-light-gray: #c4c4c4;
        --light-gray: #ccc;
        --gray: #888;
        --dark-gray: #555;
    }

    * {
        font-size: 100%;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--purple);
    }

    body { 
        font-family: 'Roboto', sans-serif;
        background: linear-gradient(180deg, rgba(154, 48, 250, 0.3) 0%, rgba(0, 0, 0, 0) 100%), #333333;

        width: 100vh;
        height: 100vh;
    }

    ul { 
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`