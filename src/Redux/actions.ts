import {CREATE_CARD, LOCAL_CARD, REMOVE_CARD, SHOW_MORE} from "./types";
import {InewCard} from "../components/ModalAdd";

type Tcoords = {
    x: number
    y: number
}

const API_KEY = "34f77aee4b9d8e4a73495da7c1093aab"

function getLocalCard({x, y}: Tcoords) {
    return async (dispatch: any) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${y}&lon=${x}&lang=ru&units=metric&appid=${API_KEY}`)
        const data = await res.json()
        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }
        dispatch({ type: LOCAL_CARD, payload: data})
    }
}

export function showMore(x: number, y: number, name: string) {
    return async (dispatch: any) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${y}&lon=${x}&lang=ru&units=metric&appid=${API_KEY}`)
        const data = await res.json()
        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }
        dispatch({type: SHOW_MORE, payload: data, city: name})
    }
}

export function removeCard(id: number) {
    return (dispatch: any) => {
        dispatch({ type: REMOVE_CARD, payload: id})
    }
}

export function createCard(form: InewCard) {
    return async (dispatch: any) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.location}&${form.index}&lang=ru&units=metric&appid=${API_KEY}`)
        const data = await res.json()
        console.log(res)
        if (!res.ok) {
            throw new Error(`Произошла ошибка ${res.status}`);
        }
        dispatch({ type: CREATE_CARD, payload: data})
    }
}

export default getLocalCard