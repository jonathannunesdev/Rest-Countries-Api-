import styled from 'styled-components';
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{theme: themeType}>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  
  .container--button{
    height: 20vh;
    display: flex;
    align-items: center;
  }

  .container--general{
    display: flex;
    gap: 100px;


    @media (max-width: 912px) {
      flex-direction: column;
      gap: 0px;
      height: auto;
    }
  }

    .container--left{
        flex: 1;  
    }

    .container--left img{
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .container--right{
      flex: 1;
      color: ${props => props.theme.status === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}
      height: 100%;
      margin-bottom: 30px;
    }

  .right--info {
    columns: 2;
    gap: 80px;

    @media (max-width: 900px) {
      columns: 1;
    }
  }
  
  .right--info ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .right--info li {
    line-height: 2.4;
    word-wrap: break-word;
  }

  .container--borderCountries{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 35px;
  }
`;

export const Button = styled.button<{theme: themeType}>`
  width: 135px;
  height: 40px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12); 
  cursor: pointer;
  background-color: ${props => props.theme.status === 'light' ? 'var(--DarkModeTextLightModeElements);' : 'var(--DarkModeElements);'} 
  color: ${props => props.theme.status === 'light' ? 'var(--LightModeText);' : 'var(--DarkModeTextLightModeElements);'}

  &:hover{
    opacity: .7;
  }
`;

