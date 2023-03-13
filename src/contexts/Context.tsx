import { createContext, ElementType } from "react";
import { statusPageInitialState, statusPageReducer } from "../reducers/detailsReducer";
import { themeType, themeInitialState, themeReducer } from '../reducers/themeReducer'
import { countriesReducer } from "../reducers/countriesReducer";
import { ActionType } from "../types/ActionType";
import { useReducer } from "react";
import { statusPageProps } from "../reducers/detailsReducer";
import { CountriesState, countriesInitialState  } from "../reducers/countriesReducer";


export type InitialStateType = {
    details: statusPageProps;
    theme: themeType;
    countries: CountriesState;
};

export const InitialState: InitialStateType = {
    details: statusPageInitialState,
    theme: themeInitialState,
    countries: countriesInitialState,
};


export type ContextType = {
    state: InitialStateType,
    dispatch: React.Dispatch<ActionType>;
};


export const Context = createContext<ContextType>({
    state: InitialState,
    dispatch: () => null
});

export const MainReducer = (state: InitialStateType , action: ActionType): InitialStateType => ({
    details: statusPageReducer(state.details, action),
    theme: themeReducer(state.theme, action),
    countries: countriesReducer(state.countries, action)
});

export const ContextProvider: ElementType = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, InitialState)

    return (
        <Context.Provider value={{state, dispatch}}>
            { children }
        </Context.Provider>
    )
};