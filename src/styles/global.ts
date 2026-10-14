import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus-visible{
        outline: 2px solid #b5d6ad; outline-offset: 4px;
            }

    body  {
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
a{
    color: inherit;
    text-decoration: none;
    
}
    a:visited{
        color: inherit
        
    }
     `
