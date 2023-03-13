import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div`
  a{
    text-decoration: none;
  }
`;

export const BoxCountry = styled.div<{theme: themeType}>`
  border-radius: 3px;
  margin: 7px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  background-color: ${props => props.theme.status === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'} 
  color: ${props => props.theme.status === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12); 
  cursor: pointer;
  min-width: 50px;

  
  &:hover{
    opacity: .7;
  }
`;