import { ActionType } from "../types/ActionType";

export type statusPageProps = {
    status: boolean;
};

export const statusPageInitialState: statusPageProps = {
    status: false,
};

// Essa função é um reducer que gerencia o estado global e que define quando a pagina Countrie sera aberta ou fechada com as informações detalhadas do País clicado.
export const statusPageReducer = (state: statusPageProps, action:ActionType) => {
    switch(action.type){
        case 'CHANGE_STATUS':
            return {...state, status: action.payload.status};
        }
        return state
};
