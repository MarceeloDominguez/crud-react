import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {

        const { items, clearList, handleDelete, handleEdit, handleComplete } = this.props

        return (
            <ul>
                {
                    items.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                title={item.title}
                                descripcion={item.descripcion}
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                                handleComplete={() => handleComplete(item.id)}
                            />
                        )
                    })
                }
                <div className="div-boton">
                    <button onClick={clearList} className='clear-list'>
                        Eliminar todo
                    </button>
                </div>
            </ul>
        )
    }
}
