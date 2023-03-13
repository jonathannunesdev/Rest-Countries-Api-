import { Link } from "react-router-dom";
import { Container, Button } from './styles'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from '../../contexts/Context'
import { themeType } from "../../reducers/themeReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { BorderCountryItem } from "../../components/BorderCountryItem";

type Props = {
  theme: themeType;
};

// componente que renderiza o País clicado com informações detalhadas
export const Countrie = ({ theme }: Props) => {
  const { index } = useParams<{ index: string }>();
  const { state } = useContext(Context);

  // Obtém as informações do país selecionado a partir do estado global
  const country = state.countries.list[Number(index)];

  // Obtém o nome nativo do país, se disponível
  const nativeNames = country.name.nativeName ? Object.values(country.name.nativeName) : undefined;
  const native = nativeNames ? nativeNames[nativeNames.length - 1].common  : "No Data Available";


// Obtém a lista de moedas utilizadas pelo país, se disponível
  const currList = country.currencies
    ? Object.values(country.currencies).map((item, index) => {
        if (index == 0) {
          return item.name;
        } else {
          return ", " + item.name;
        }
      })
    : "No Data Available";

  return (
    <Container theme={theme}>
      <div className="container--button">
        <Link to='/'><Button theme={theme}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</Button></Link>
      </div>
      <div className="container--general">
        <div className="container--left">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>

        <div className="container--right">
          <h1>{country.name.common}</h1>
          
          <div className="right--info">
            <ul>
              <li><strong>Native Name: </strong>{native}</li>
              <li><strong>Population: </strong>{country.population.toLocaleString()}</li>
              <li><strong>Region: </strong> {country.region ? country.region : "No Data Available"}</li>
              <li><strong>Sub Region: </strong> {country.subregion ? country.subregion : "No Data Available"}</li>
              <li><strong>Capital: </strong>{country.capital ? Object.values(country.capital).join(", ") : "No Data Available"}</li>
              <li><strong>Top Level Domain: </strong>{country.tld ? country.tld[0] : "No Data Available"}</li>
              <li><strong>Currencies: </strong>{currList}</li>
              <li><strong>{country.languages && Object.values(country.languages).length > 1 ? 'Languages: ': 'Language: '}</strong>{country.languages && Object.values(country.languages) ? country.languages && Object.values(country.languages) : 'No Data Available'}</li>
            </ul>
          </div>

          <div className="container--borderCountries">
              <strong>Border Countries: </strong> 
              {country.borders && country.borders.map((border: string, index: number) => (
                <BorderCountryItem border={border} key={index} theme={theme}/>
              ))}
          </div>

          </div>
        </div>
    </Container>  
  );
};



             