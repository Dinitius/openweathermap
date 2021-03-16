import Icard, {IInfo} from "../components/interfaces";
import {CREATE_CARD, LOCAL_CARD, REMOVE_CARD, SHOW_MORE} from "./types";
import getLocalCard from "./actions";
import {useDispatch} from "react-redux";

interface Initial {
    cards: Icard[],
    localCard: [],
    cardInfo: IInfo[]
}
const initialState: Initial = {
    cards: [],
    localCard: [],
    cardInfo: []
}

const Initial = () => {
    const dispatch = useDispatch()
    window.onload = function() {
        const geoSuccess = function(position: any) {
            const startPos = position
            const coords = {
                x: startPos.coords.longitude,
                y: startPos.coords.latitude
            }
            console.log(coords)
            dispatch(getLocalCard(coords))
        }
        navigator.geolocation.getCurrentPosition(geoSuccess);
    }
}


const deleteCard = (state: Initial, itemId: number) => {
    const index = state.cards.findIndex(({id}) => id === itemId)
    return {...state, cards: [...state.cards.slice(0, index), ...state.cards.slice(index + 1)]}
}

export const cardsReducer = (state: Initial = initialState, action: any) => {
    switch (action.type) {
        case CREATE_CARD:
            return { ...state,  cards: state.cards.concat(action.payload)}
        case LOCAL_CARD:
            return { ...state,  localCard: state.localCard.concat(action.payload)}
        case REMOVE_CARD:
            return deleteCard(state, action.payload)
        case SHOW_MORE:
            return { ...state,  cardInfo: state.cardInfo.concat({...action.payload, name: action.city})}
        default: return state
    }
}

export default Initial
