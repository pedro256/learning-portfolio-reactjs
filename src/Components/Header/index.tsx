import React from "react"
import { HeaderContainer } from "./styles"

import sun from '../../Assets/sun.svg'
import moon from '../../Assets/moon.svg'

import {HiTranslate} from 'react-icons/hi'

import Switch from 'react-switch'
import { MarginHSimples } from "../../Styles/global"
import { useContext } from "react"
import { GlobalContext } from "../../Context/global.context"

const Header: React.FC = ()=>{

    const {contextTheme,onToggleTheme} = useContext(GlobalContext)

    return (
        <HeaderContainer>
            <div>
                <Switch
                checked={
                    contextTheme.title==="light"?true:false
                }
                onChange={()=>{
                    onToggleTheme()
                }}
                checkedIcon={
                    <img src={sun} alt="sun" />
                }
                onColor="#F2F2F2"
                handleDiameter={0}
                uncheckedIcon ={
                    <img src={moon} alt="moon" />
                }
                offColor="#323232"
                
                />
                
            </div>
            <MarginHSimples>
                <HiTranslate size={30} />
            </MarginHSimples>
        </HeaderContainer>
    )
}

export default Header