import React from "react"
import {connect} from "react-redux";
import './Modal.css'

const ModalInfo = (cardInfo: any) => {
    const closeInfoModal = () => {
        const closeBtn = document.querySelector('.modalInfo')
        closeBtn!.classList.add('hide')
    }
    let card = cardInfo.info
    return (
        <div className="mod modalInfo hide col-6">
            <div className="modalHeader mt-3 mb-5">
                <h3 className="cardTitle">{card.name}</h3>
                <button className='btn ' onClick={closeInfoModal}>X</button>
            </div>
            <ul>
                <li className="newCard mb-3" key={card.daily[0].dt.toString()}>
                    <div className="card col-9"  id={card.daily[0].dt.toString()}>
                        <div className="card-body infoCardBody">
                            <p className="today">Сегодня</p>
                            <div className="info">
                                <p className="weather mb-0 fs-4">{Math.round(card.daily[0].temp.day)}</p>
                                <img src={`http://openweathermap.org/img/wn/${card.daily[0].weather[0].icon}.png`} alt="img"/>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="newCard mb-3" key={card.daily[1].dt.toString()}>
                    <div className="card col-9"  id={card.daily[1].dt.toString()}>
                        <div className="card-body infoCardBody">
                            <p className="today">Завтра</p>
                            <div className="info">
                                <p className="weather mb-0 fs-4">{Math.round(card.daily[1].temp.day)}</p>
                                <img src={`http://openweathermap.org/img/wn/${card.daily[1].weather[0].icon}.png`} alt="img"/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    const lastOne = state.createCards.cardInfo.length - 1
    return {
        info: state.createCards.cardInfo[lastOne]
    }
}

export default connect (mapStateToProps, null)(ModalInfo)