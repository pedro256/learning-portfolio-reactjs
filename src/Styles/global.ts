import styled, {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{  
        
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        font-size: 14px;
        background-color:${props => props.theme.colors.background};
        color:${props => props.theme.colors.text};
        
    }
`

export const MarginHSimples = styled.div`
    margin-right:18px;
    margin-left:18px;
`

export const AreaOptions = styled.div`
    position:relative;

    @media (min-width: 100px) and (max-width: 600px){
        position: none;
        display: block;
    }
`


interface PropsItemRelative{
    left:string;
    top:string;
}
export const ItemRelative = styled.div<PropsItemRelative>`
    position: relative;
    left: ${props => props.left};
    top: ${props => props.top};
    right:10%;
    width: max-content;

    @media (min-width: 100px) and (max-width: 600px){
        position: none;
        top:0;
        left: 25%;
        right: 0;
    }
`