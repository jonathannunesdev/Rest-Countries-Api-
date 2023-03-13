import { Container } from './styles';
import { themeType } from '../../reducers/themeReducer';
import { CountryType } from '../../types/CountryType';
import { Link } from 'react-router-dom';

type Props = {
  data: CountryType;
  theme: themeType;
  onClick?: () => void;
  index: number;
};

// componente do item de cada pais, com as informações iniciais a ser renderizados na página inicial(Home).
export const CountryItem = ({ data, theme, index, onClick }: Props) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
      <Container onClick={handleOnClick} theme={theme}>
        <Link to={`/countrie/${index}`}> 
        <img src={data.flags.svg} alt="" />
        <div className='infoCountry'>
          <h3>{data.name.common}</h3>
          <p>
            <strong>Population: </strong>
            {data.population.toLocaleString()}
          </p>
          <p>
            <strong>Region: </strong>
            {data.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {data.capital} 
          </p>
        </div>
        </Link>
      </Container>
  )
};