import React, { useContext } from "react";


import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global'

import Profile from './Pages/Profile';
import { GlobalContext } from "./Context/global.context";


const App: React.FC = () => {

    const { contextTheme} =  useContext(GlobalContext)

    return (
        <div>
                <ThemeProvider theme={contextTheme}>
                    <GlobalStyles />
                    <Profile />
                </ThemeProvider>
        </div>
    )
}

export default App