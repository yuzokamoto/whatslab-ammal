import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Roboto', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        display: flex;
        justify-content: center;
    }
`

export const AppContainer = styled.div`
    width: 600px;
    height: 100vh;
    /* margin: 0 auto; */
`


/*
Qualquer div filha de root
#root {
    div {

    }
}

Somente as divs filhas diretas de root
#root {
    > div {
        
    }
}

Somente a primeira div filha de root
#root {
    div:first-child {
        
    }
}

Somente a quinta div filha de root
#root {
    div:nth-child(5) {
        
    }
}

*/