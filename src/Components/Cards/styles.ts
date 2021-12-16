import styled from 'styled-components'

export const Card = styled.div`
    margin: 30px ;
    padding: 30px;

    & img{
        width: 100px;
        height: 100px;
    }
    @media (min-width: 100px) and (max-width: 600px){
        padding: 15px;
    }
`

export const ProgressBarContent = styled.div`
    background-color: #D9D9D9;
    width:100%;
    border-radius:10px;
`

interface ProgressProps{
    progress:number
}
export const Progress = styled.div<ProgressProps>`
    width: ${props => props.progress? props.progress+"%":"100%"};
    background-color: ${props => props.theme.colors.primary};
    padding: 1px;
    border-radius:10px;

    & p{
        color: #fff;
        font-weight:bold;
        text-align:center;
        align-items:center;
        margin:auto;
    };
`