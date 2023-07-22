import { Main, UInput, FootNote, Button } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [userInput, setUserInput] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    }

    const navigate = useNavigate()

    const handleSendMessage = () => {
        navigate(`/message?message=${encodeURIComponent(userInput)}`);
    }

    return (
        <>
            <Main>
                <p>Qual a sua mensagem pro cosmos hoje?</p>
                <UInput value={userInput} onChange={handleInputChange}></UInput>
                <Button onClick={handleSendMessage}>Enviar</Button>
            </Main>
            <FootNote>COSMOS</FootNote>
        </>
    )
}

export default Home;