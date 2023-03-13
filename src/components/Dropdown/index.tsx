import { themeType } from '../../reducers/themeReducer';
import * as C from './styles'

type Props = {
    onClick: React.MouseEventHandler<HTMLLIElement>
    theme: themeType;
};

// component dropdown (filterByRegion) que será aberto ou fechado de acordo ao evento de clique do usuário.
export const Dropdown = ({onClick, theme}: Props) => {

    return (
        <C.Container theme={theme}>
            <ul>
                <li onClick={onClick}>All</li>
                <li onClick={onClick}>Africa</li>
                <li onClick={onClick}>Americas</li>
                <li onClick={onClick}>Asia</li>
                <li onClick={onClick}>Europe</li>
                <li onClick={onClick}>Oceania</li>
            </ul>
        </C.Container>
    )
};