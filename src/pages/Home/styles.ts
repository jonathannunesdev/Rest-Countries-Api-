import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div`
    padding: 0 30px;
`;

export const AreaSearch = styled.div<{theme: themeType}>`
    max-width: 1200px;
    height: 150px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .inputContainer{
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40%;
        background-color: ${props => props.theme === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'} 
    }

    .inputIcon{
        width: 25px;
        margin-left: 25px;
        color: ${props => props.theme === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
    }

    input{
        flex: 1;
        outline: none;
        border: none;
        padding: 0px 10px;
        font-size: 18px;
        cursor: pointer;
        font-family: 'Nunito Sans', sans-serif;
        height: 50px;
        background-color: ${props => props.theme === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'}
        color: ${props => props.theme === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}


        &::placeholder{
            color: ${props => props.theme === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
        }
    }

    .buttonFilter{
        height: 50px;
        width: 180px;
        color: ${props => props.theme === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
        background-color: ${props => props.theme === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'}
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 16px;
    }

    @media (max-width: 1200px) {
        margin: 0 10px;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 25px;
    }

    @media (max-width: 375px) {
        margin: 0 20px;
    }
`;

export const AreaCountries = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    @media (max-width: 768px) {
        justify-content: center;  
    }
`;