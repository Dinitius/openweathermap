import React, {PropsWithChildren, useEffect} from 'react'
import {connect, useDispatch, useSelector} from "react-redux";
import getLocalCard, {createCard, removeCard, showMore} from '../Redux/actions'
import Icard from "./interfaces";

interface Tprops {
    allCards: Icard[],
    handleModal: () => void,
}

const Cards = ({allCards, handleModal}: Tprops) => {
    const dispatch = useDispatch()
    const cards: Icard[] = allCards
    return (
        <ul>
            {
                (!cards.length) ? '' :
                    cards && cards.map((card: Icard, index: number) => {
                    return (
                        <li className="newCard mb-3" key={index}>
                            <div className="card border border-secondary col-9"
                                 onClick={async () => {
                                     await dispatch(showMore(card.coord.lon, card.coord.lat, card.name))
                                     handleModal()}} id={card.id.toString()}>
                                <div className="card-body">
                                    <h5 className="location">{card.name}</h5>
                                    <p className="weather fs-4">{Math.round(card.main.temp)}</p>
                                    <img src={`http://openweathermap.org/img/wn/${card.weather[0].icon}.png`} alt="img"/>
                                </div>
                            </div>
                        <img src="https://i.ibb.co/gVnqTZf/delete.png" alt="delete" className="del" onClick={() => dispatch(removeCard(card.id))}></img>
                        </li>
                    )
                }
               )}
        </ul>
    )}

const mapStateToProps = (state: any) => {
    return {
        allCards: state.createCards.cards
    }
}
const mapDispatchToProps = {
    createCard,
    removeCard,
    showMore
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)


