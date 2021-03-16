import React from "react"
import { useState } from "react"
import {connect, useDispatch} from "react-redux";
import { createCard } from '../Redux/actions'
import "./Modal.css"


export interface InewCard {
    location: string,
    index: string,
}

type Tprops = {
    closeModal: () => void,
}


const ModalAdd = ({ closeModal }: Tprops) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        location: '',
        index: ''
    })

    const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (form.location !== '' && form.index !== '') {
            createCard(form)
            closeModal();
            setForm({location: '', index: ''})
        }
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const enabled = form.location.length > 0 && form.index.length > 0

    return (
                <div className="mod modalAdd col-6">
                    <form onSubmit={submitHandler}>
                        <div className="mb-5">
                            <label htmlFor="exampleInputEmail1" className="form-label">Название города</label>
                            <input type="text"
                                   className="form-control"
                                   value={form.location}
                                   name="location"
                                   onChange={changeHandler}/>
                        </div>
                        <div className="mb-3 mb-5">
                            <label htmlFor="exampleInputPassword1" className="form-label">Индекс города</label>
                            <input type="text"
                                   className="form-control"
                                   value={form.index}
                                   name="index"
                                   onChange={changeHandler}/>
                        </div>
                        <button type="submit" disabled={!enabled}
                                className="btn btn-primary"
                                onClick={() => dispatch(createCard(form))}>Добавить</button>
                    </form>
                </div>
            )
}

const mapDispatchToProps = {
    createCard
}

export default connect(null, mapDispatchToProps)(ModalAdd)