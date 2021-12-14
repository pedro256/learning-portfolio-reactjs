import styled, { keyframes } from "styled-components";

const rotate = keyframes`
     0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 15px); }
    100%   { transform: translate(0, -0px); }
`;

export const FloatDiv = styled.div`
    display: inline-block;
    animation: ${rotate} 10s linear infinite;
    padding: 2rem 1rem;
`