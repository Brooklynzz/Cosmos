import styled from "styled-components";

export const Polaroid = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #dedad9;
    width: 700px;
    height: fit-content;
    margin: 0 auto;
    padding: 25px;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 10px 10px 48px 0px rgba(0,0,0,0.75);

    p {
        box-sizing: border-box;
        text-align: center;
        font-size: 30px;
        color: #000;
        padding-bottom: 30px;
        font-family: 'Annie Use Your Telescope', cursive;
        margin: 15px 10px;
    }

    img {
        border-radius: 5px;
        width: 550px;
        height: 650px;
        box-shadow: 0 0 3px #000;
    }
`