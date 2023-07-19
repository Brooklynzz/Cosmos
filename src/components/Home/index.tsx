import { Main, UInput, FootNote, Button } from "./style";

const Home = () => {
    return (
        <>
            <Main>
                <p>Qual a sua mensagem pro cosmos hoje?</p>
                <UInput></UInput>
                <Button>Enviar</Button>
            </Main>
            <FootNote>COSMOS</FootNote>
        </>
    )
}

export default Home;