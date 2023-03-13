import styled from "styled-components";
import { themeType } from "./reducers/themeReducer";

export const Container = styled.div<{theme: themeType}>`
    background-color: ${props => props.theme === 'light' ? 'var(--LightModeBackground);' : 'var(--ModeBackground);'}
    min-height: 100vh;
    transition: all ease-in-out 0.1s;
`

export const Header = styled.div<{theme: themeType}>`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    background-color: ${props => props.theme === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'} 
    color: ${props => props.theme === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
    height: 5%;  
    padding: 10px 0;
`;

export const HeaderInfo = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    
    
    h4{
        font-weight: 100;
        cursor: pointer;
        
        &:hover{
            opacity: .7;
        }
    }

    @media (max-width: 1200px) {
        margin: 0 10px;
    }

    @media (max-width: 476px) {
        font-size: .7em;
    }

    @media (max-width: 330px) {
        flex-direction: column;
    }
   
`;