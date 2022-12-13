import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
        font-family: 'Roboto', sans-serif;

        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }
    .shape {
            --mask:
              radial-gradient(321.11px at 50% 453.60px,#000 99%,#0000 101%) calc(50% - 432px) 0/864px 100%,
              radial-gradient(321.11px at 50% -237.6px,#0000 99%,#000 101%) 50% 216px/864px 100% repeat-x;
            -webkit-mask: var(--mask);
                    mask: var(--mask);
    }  
`
export default GlobalStyle
