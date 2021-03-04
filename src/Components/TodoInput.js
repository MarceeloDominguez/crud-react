import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {

        const { item, itemDos, handleSubmit, handleChange, editItem, handleError } = this.props
        //console.log(item)
        return (
            <form className='form' onSubmit={handleError}>
                <div className="form-grupo">
                    <label className="form-label">Titulo</label>
                    <div>
                        <input name='item' onChange={handleChange} value={item} className="form-input titulo" type="text" maxLength="28" />
                    </div>
                </div>
                <div className="form-grupo">
                    <label className="form-label">Descripcion</label>
                    <div>
                        <input name='itemDos' onChange={handleChange} value={itemDos} className="form-input descripcion" type="text" maxLength="28" />
                    </div>
                </div>
                <div className="div-boton">
                    {/* <button type="submit" className="form-btn">Enviar</button> */}
                    <button type="submit" className={
                        editItem ? 'form-btn-edit' : 'form-btn'
                    }>
                        {editItem ? 'Editar Item' : 'Agregar'}
                    </button>
                </div>
                <p className='mensaje-error'></p>
            </form>
        )
    }
}
