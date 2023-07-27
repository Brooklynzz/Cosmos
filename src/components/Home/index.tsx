import { Main, UInput, FootNote, Button, Language } from "./style";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../App";

const Home = () => {
    const { language, updateLanguage } = useContext(LanguageContext) ?? { language: 'pt-br', updateLanguage: () => {} };

    const [userInput, setUserInput] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    }

    const navigate = useNavigate()

    const handleSendMessage = () => {
        navigate(`/message?message=${encodeURIComponent(userInput)}`);
    }

    const handleLanguageChange = () => {
        if ("pt-BR" === language) {
            updateLanguage("en-US")
        } else {
            updateLanguage("pt-BR")
        }
    }

    const titleText = "pt-BR" === language ? "Qual a sua mensagem pro cosmos hoje?" : "What's your message to the cosmos today?"
    const languageText = "pt-BR" === language ? "EN-US" : "PT-BR"
    const sendText = "pt-BR" === language ? "Enviar" : "Send"

    return (
        <>
            <Main>
                <Language onClick={handleLanguageChange}>{languageText}</Language>
                <p>{titleText}</p>
                <UInput value={userInput} onChange={handleInputChange}></UInput>
                <Button onClick={handleSendMessage}>{sendText}</Button>
            </Main>
            <FootNote>COSMOS</FootNote>
        </>
    )
}

export default Home;