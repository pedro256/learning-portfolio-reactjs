import React from "react"
import Header from "../../Components/Header"
import { FloatDiv } from "./styles"


const Profile:React.FC = ()=>{
    return (
        <div>
            <Header/>
            <div>
                <FloatDiv>
                    <h1>Sobre Mim</h1>
                </FloatDiv>
                <FloatDiv>
                    <h1>Trabalhos</h1>
                </FloatDiv>
                <FloatDiv>
                    <h1>Habilidade</h1>
                </FloatDiv>
                <FloatDiv>
                    <h1>Contatos</h1>
                </FloatDiv>
            </div>
        </div>
    )
}

export default Profile