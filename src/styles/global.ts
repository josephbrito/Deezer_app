import { createGlobalStyle } from "styled-components";
import Bg from "../assets/logo.png";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-white:#f5f5f5;
        --bg-black:#3F4045;
        --link-color:#00c7f2;
        --mobile-max:1070px;
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html, body, #root {
        height:100%;
    }

    body {
        background:url(${Bg}) ;
        background-attachment: fixed;
        background-size: cover;
        color:var(--color-white);
        font-family: sans-serif;
    }

`;
