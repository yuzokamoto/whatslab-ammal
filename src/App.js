import { useState } from "react"
import Header from "./components/Header/Header"

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
        <div>
            <Header
                senders={senders}
                currSender={currSender}
                onChangeSender={onChangeSender}
            />

            <h1>{currSender}</h1>
        </div>
    )
}

export default App
