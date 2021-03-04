import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {

        const { title, descripcion, handleDelete, handleEdit, handleComplete } = this.props

        return (
            <table className='informacion-dom'>
                <tbody className='lista-datos'>
                    <tr>
                        <td className='datos'>{title}</td>
                        <td className='datos'>{descripcion}</td>
                        <td>
                            <button onClick={handleDelete} className='delete-btn'>
                                <i className="fas fa-trash"></i>
                            </button>
                        </td>
                        <td>
                            <button onClick={handleEdit} className='edit-btn'>
                                <i className="fas fa-edit"></i>
                            </button>
                        </td>
                        <td>
                            <button onClick={handleComplete} className='check-btn'>
                                <i className="fas fa-check"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}


