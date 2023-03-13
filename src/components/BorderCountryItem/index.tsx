import { Container, BoxCountry } from "./styles";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import { themeType } from "../../reducers/themeReducer";

type Props = {
    border: string;
    theme: themeType
  }
  
// componente que cria o box dos países com fronteira, e renderiza na tela
export const BorderCountryItem = ( {border, theme}: Props ) => {
    const {state} = useContext(Context)
    const indexCountry = state.countries.list.findIndex((country) => country.cca3 === border);

    return (
        <Container >
            <Link to={`/countrie/${indexCountry}`}>
                <BoxCountry theme={theme}>{border}</BoxCountry>
            </Link>
        </Container>
    )
};
