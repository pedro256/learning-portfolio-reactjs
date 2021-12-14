import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

    *{  
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        font-size: 14px;
        background-color:${props => props.theme.colors.background};
        color:${props => props.theme.colors.text};
        font-family: Poppins, sans-serif;
    }
`

export const MarginHSimples = styled.div`
    margin-right:18px;
    margin-left:18px;
`