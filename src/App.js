import { useState } from "react"
import { initialMessages } from "./assets/initialMessages"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
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

    const [messages, setMessages] = useState(initialMessages)

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

            <Main messages={messages} />

            {/* Footer */}
        </AppContainer>
    )
}

export default App
