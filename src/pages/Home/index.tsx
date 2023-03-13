import * as C from './styles';
import { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '../../components/Dropdown';
import { CountryItem } from '../../components/ContryItem';
import { Countrie } from '../Countrie/index'
import { Context } from '../../contexts/Context'
import { Api } from '../../apis/Api';
import { CountryType } from '../../types/CountryType';

export const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const {state, dispatch} = useContext(Context);
  const [searchInput, setSearchInput] = useState('')

  // Requisição e carregamento da lista completa de países na tela inicial.
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countriesList = await Api.getAllCountries();
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: {
            list: countriesList
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    loadCountries();
  }, [dispatch]);


  // Função para controle da abertura do Dropdown(filterByRegion)
  const handleOpenDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDropdown(!openDropdown)
  };


  // Função para filtrar países por região
  const handleRegionFilter = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const value = e.currentTarget.innerText;
    const countriesList = await Api.getAllCountries();

    const countriesFiltered = countriesList.filter((item: CountryType) => item.region === value);

    if(value === 'All'){
      dispatch({
        type: 'SET_COUNTRY_LIST',
        payload: {
          list: countriesList
        },
      });
    }
    if(countriesFiltered.length > 0){
      dispatch({
        type: 'SET_COUNTRY_LIST',
        payload: {
          list: countriesFiltered
        }
      });
    }
  };


  // Função para a busca por nome de país
  const handleSearchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  };

  // Filtra e renderiza os países de acordo com o valor digitado no input de busca
  useEffect(() => {
    const searchCountries = async () => {
      const countriesList = await Api.getAllCountries();
      const filteredCountries = countriesList.filter((item: CountryType) =>
        item.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
      dispatch({
        type: 'SET_COUNTRY_LIST',
        payload: {
          list: filteredCountries,
        },
      });
    };
  
    searchCountries();
  }, [searchInput, dispatch]);
  

  return (
    <C.Container theme={state.theme.status}>
      {state.details.status ? ( <Countrie theme={{ status: state.theme.status }}/> ) : (

      <>
      <C.AreaSearch theme={state.theme.status}>
        <div className='inputContainer'>
          <div className='inputIcon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
          <input 
            type="text" 
            placeholder='Search for a Country...'
            onChange={handleSearchCountry}
            value={searchInput}
            />  
          </div>
        <button className='buttonFilter' onClick={handleOpenDropdown}>Filter By Region &nbsp;<FontAwesomeIcon icon={faChevronDown} />
          {openDropdown && 
            <Dropdown theme={{ status: state.theme.status }} onClick={handleRegionFilter}/>
          }
        </ button>

      </C.AreaSearch>

      <C.AreaCountries>
        {state.countries.list.map((item, index) => (
          <CountryItem key={index} data={item} theme={{ status: state.theme.status }} index={index} />
        ))}   
      </C.AreaCountries>
        </>
      )}

    </C.Container>
  )
};