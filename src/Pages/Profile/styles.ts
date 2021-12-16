import styled, { keyframes } from "styled-components";

const rotate = keyframes`
     0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }
`;

export const FloatDiv = styled.div`
    display: inline-block;
    animation: ${rotate} 5s linear infinite;
    padding: 2rem 1rem;

    & h1{
        font-size: 40px;
        font-weight:bold;
        text-transform: uppercase;

        @media (min-width: 100px) and (max-width: 600px){
            font-size: 20px;
            text-align:center;
        }
    }

    @media (min-width: 100px) and (max-width: 600px){
            font-size: 20px;
    }
`


export const ContainerAnimationCenter = styled.div`
    margin:10px;
    margin-top:150px;
    width: 100%;
    display: flex;
    justify-content:center;
`


export const ContainerHeaderApresentation = styled.div`
    width: 100%;
    margin-top:100px;
    padding: 150px 150px 50px 150px;

    @media (min-width: 100px) and (max-width: 600px){
        padding: 150px 10px 50px 10px;
    }
`

export const ImgProfile = styled.img`
    border: 6px solid #00FF57;
    box-sizing: border-box;
    border-radius: 250px 0px;
    width: 100%;
`


export const TitleApresentationName = styled.h1`
    font-size:96px;
`

export const Description = styled.h4`
    padding:10px 80px 0 80px;
    font-size: 18px;
    line-height: 27px;
    width: margin;
    font-weight:bold;

    @media (min-width: 100px) and (max-width: 600px){
        padding: 14px;
    }
`

interface TitleProps{
    align?:string
}

export const Title = styled.div<TitleProps>`
    font-size: 48px;
    line-height: 72px;
    text-shadow: 0px 4px 4px rgba(13, 13, 13, 0.25);
    text-align:${props => props.align?props.align:'center'};
    margin: 66px 33px 66px 33px;

`

interface ContainerDataProps{
    borderRight?:boolean
    borderLeft?:boolean
}
export const ContainerData = styled.div<ContainerDataProps>`
    ${
        props=> props.borderRight?"border-right: 3px solid "+props.theme.colors.primary+";":""
    }
    ${
        props=> props.borderLeft?"border-left: 3px solid "+props.theme.colors.primary+";":""
    }
    margin: 5px 30px 5px 30px;
`