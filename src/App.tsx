import * as C from './App.styles';
import { MainRoutes } from './routes/routes';
import { Context } from './contexts/Context'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

// Componente principal que renderiza o aplicativo
const App = () => {
  const {state, dispatch} = useContext(Context);

  // Função que alterna entre os temas light e dark
  const handleChangeTheme = () => {
    if(state.theme.status === 'light'){                 
      dispatch({
        type: 'CHANGE_THEME',
        payload: {
          status: 'dark'
        }
      })
    } else {
      dispatch({
        type: 'CHANGE_THEME',
        payload: {
          status: 'light'
        }
      })
    }       
  };

  // Renderiza o componente com as rotas principais
  return (
    <C.Container theme={state.theme.status}>
      <C.Header theme={state.theme.status} >
        <C.HeaderInfo>  
          <h2>Where in the world?</h2>
          <h4 onClick={handleChangeTheme}><FontAwesomeIcon icon={state.theme.status === 'light' ? faMoon : faSun} />  {state.theme.status === 'light' ? 'Dark Mode' : 'Light Mode'}</h4>
        </C.HeaderInfo>
      </C.Header>
      <MainRoutes/>
    </C.Container>
  )
}

export default App;