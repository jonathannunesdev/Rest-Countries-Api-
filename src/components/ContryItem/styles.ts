import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{theme: themeType}>`

    a{
    width: 265px;
    height: 335px;
    background-color: ${props => props.theme.status === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'} 
    color: ${props => props.theme.status === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);    
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    text-decoration: none;
    
    @media (max-width: 1200px) {
        margin: 0 10px;
        margin-bottom: 50px;
    }
    
    &:hover{
        box-shadow: 0.2em 0.3em 0.4em -0.4em black;
        transform: translateY(-0.25em);
        opacity: .7;
        }

    
    img{
        max-height: 50%;
        object-fit: cover;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        flex: 1;
    }

    .infoCountry{
        flex: 1;
        padding-left: 15px;
        padding-top: 15px;
        strong, p{
            line-height: 5px;
        }
    }   
}
`;