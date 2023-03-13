import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{theme: themeType}>`
    background-color: ${props => props.theme.status === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'}
    color: ${props => props.theme.status === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
    position: absolute;
    top: 175px;
    width: 180px;
    border-radius: 5px;
 
    ul{
        padding: 0px 25px;
    }

    li{
        list-style: none;
        padding: 5px 0px;
        text-align: start;

        &:hover{
            cursor: pointer;
            scale: 1.1;
            color: #DD0000;
        }
    }

`;