import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ReactElement, SetStateAction, createContext, useState } from 'react'
import Home from './components/Home';

interface AppProps {
  language: "pt-BR" | "en-US",
  children: ReactElement
}

export const LanguageContext = createContext<null | { language: string; updateLanguage: (newLanguage: string) => void }>(null);

export const LanguageProvider = (props: AppProps) => {
  const [language, setLanguage] = useState("pt-BR")

  const updateLanguage = (newLanguage: string): void => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{language, updateLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  )
}

function App() {
  return (
    <LanguageProvider language={'pt-BR'}>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/message" element={<h1>Teste 2</h1>}></Route>
            </Routes>
          </BrowserRouter>
      </div>
    </LanguageProvider>
  )
}

export default App
