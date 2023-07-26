import styled from "styled-components";

export const Main = styled.div `
    border: 5px solid black;
    margin: 30px;
    padding: 12.5%;
    text-align: center;

    p {
        font-family: 'Julius Sans One', sans-serif;
        font-size: 48px;
        padding: 0;
    }
`;

export const Language = styled.div `
    font-family: 'Julius Sans One', sans-serif;
    border-bottom: 1px solid #000;
    position: absolute;
    top: 10%;
    left: 5%;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;

export const UInput = styled.input `
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 3px solid #000;
    font-size: 24px;
    margin-top: 10px;
`;

export const Button = styled.button `
    font-family: 'Julius Sans One', sans-serif;
    background: none;
    height: 50px;
    width: 200px;
    margin-top: 5%;
    font-weight: bold;

    &:hover {
        background-color: #000;
        color: #FFF;
        cursor: pointer;
        transition: 1s
    }
`;

export const FootNote = styled.footer `
    font-family: 'Julius Sans One', sans-serif;
    text-align: center;
    font-size: 26px;
`;