import React, {useState} from 'react'
import Cards from "./components/Cards"
import ModalAdd from "./components/ModalAdd"
import getLocalCard, {showMore} from '../src/Redux/actions'
import "./App.css"
import {connect, useDispatch} from "react-redux";
import ModalInfo from "./components/ModalInfo";
import Initial from '../src/Redux/cardsReducer'

const App = (local: any) => {
    Initial()
    const dispatch = useDispatch()
    const card = local.local
    const [isAddModalVisible, setIsAddModalVisible] = useState(false)
    const [isInfoModalVisible, setIsInfoModalVisible] = useState(false)
    const handleAddModal = () => {
        setIsAddModalVisible(!isAddModalVisible)
    }

    const handleInfoModal = () => {
        setIsInfoModalVisible(!isAddModalVisible)
        const closeBtn = document.querySelector('.modalInfo')
        closeBtn!.classList.remove('hide')
    }
    if (card.length) {
        return (
            <div className="container pt-5">
                <div className="row">
                    <div className="col-8">
                        <ul>
                            <div className="card border border-secondary col-9" key={Date.now().toString()}>
                                <div className="card-body"
                                     onClick={async () => {
                                         await dispatch(showMore(card[0].lon, card[0].lat, "Мое Местоположение"))
                                         handleInfoModal()}}>
                                    <h5 className="location">Мое местоположение</h5>
                                    <p className="weather fs-4">{Math.round(card[0].current.temp)}</p>
                                    <img src={`http://openweathermap.org/img/wn/${card[0].current.weather[0].icon}.png`}
                                         alt="img"/>
                                </div>
                            </div>
                        </ul>
                        <Cards handleModal={handleInfoModal}/>
                        <img src="https://i.ibb.co/kqNTvRf/add.png" className="addBtn" onClick={() => {handleAddModal()}}alt="add"></img>
                    </div>
                    {isAddModalVisible && <ModalAdd closeModal={handleAddModal}/>}
                    {isInfoModalVisible && <ModalInfo />}
                </div>
            </div>
        )
    }
    return <p>
    </p>
}
const mapStateToProps = (state: any) => {
    return {
        local: state.createCards.localCard,
    }
}
const mapDispatchToProps = {
    getLocalCard,
    showMore
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
