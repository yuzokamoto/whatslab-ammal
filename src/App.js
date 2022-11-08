import { useState } from "react"
import Header from "./components/Header/Header"
import { AppContainer } from "./GlobalStyle"

function App() {
    // remetente atual
    const [currSender, setCurrSender] = useState("Me")
    
    // possíveis remetentes
    const [senders, setSenders] = useState([
        "Me",
        "Fulano",
        "Beltrana",
        "Ciclana",
        "Astrodev"
    ])

    // mudar o remetente atual
    const onChangeSender = (e) => {
        setCurrSender(e.target.value)
    }

    return (
        <AppContainer>
            <Header
                senders={senders}
                currSender={currSender}
                onChangeSender={onChangeSender}
            />

            <h1>{currSender}</h1>
        </AppContainer>
    )
}

export default App
