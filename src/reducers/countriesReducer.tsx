import { ActionType } from "../types/ActionType";
import { CountryType } from "../types/CountryType";

export type CountriesState = {
  list: CountryType[];
};

export const countriesInitialState: CountriesState = {
  list: [],
};

// função reducer dos países para atualização dos dados no context global
export const countriesReducer = (state: CountriesState, action: ActionType): CountriesState => {
  switch (action.type) {
    case 'SET_COUNTRY_LIST':
      return {
        ...state,
        list: action.payload.list.sort((a: CountryType, b: CountryType) => (a.name.common > b.name.common) ? 1 : -1),
      };
    default:
      return state;
  }
};
