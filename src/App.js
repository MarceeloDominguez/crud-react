import { Component } from 'react';
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import { v4 as uuid } from "uuid"

class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: '',
    itemDos: '',
    editItem: false
  }

  handleError = (e) => {
    e.preventDefault()
    if (this.state.item === '' || this.state.itemDos === '') {
      this.handleMsj()
    } else {
      this.handleSubmit()
    }
  }

  handleMsj = () => {
    const mensaje = document.querySelector('.mensaje-error')
    let msj = 'Complete los campos!'
    let div = document.createElement('div')
    mensaje.innerText = ''
    div.innerText = msj
    
    setTimeout(() => {
      div.remove()
    }, 3000)
    mensaje.appendChild(div)
  }

  handleSubmit = (e) => {
    //e.preventDefault()

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      descripcion: this.state.itemDos
    }

    const updateItems = [...this.state.items, newItem]
    console.log(updateItems)

    this.setState({
      items: updateItems,
      id: uuid(), //this.state.items.length
      item: '',
      itemDos: '',
      editItem: false
    })

    if (localStorage.getItem('items-list') === null) {
      const list = []
      list.push(newItem)
      localStorage.setItem('items-list', JSON.stringify(list))
    } else {
      const list = JSON.parse(localStorage.getItem('items-list'))
      list.push(newItem)
      localStorage.setItem('items-list', JSON.stringify(list))
    }
  }

  componentDidMount = () => {
    const list = window.localStorage.getItem('items-list')
    const parsedList = JSON.parse(list)

    if (list === null) {
      return false
    } else {
      this.setState({
        items: parsedList
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })

    let listValue = JSON.parse(localStorage.getItem('items-list'))
    listValue = []
    this.setState({ items: listValue })
    localStorage.setItem('items-list', JSON.stringify(listValue))
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)

    this.setState({
      items: filteredItems
    })

    let listValue = JSON.parse(localStorage.getItem('items-list'))
    listValue = this.state.items.filter(item => item.id !== id)
    this.setState({ items: listValue })
    localStorage.setItem('items-list', JSON.stringify(listValue))
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id)

    const selectedItem = this.state.items.find(item => item.id === id)
    console.log(selectedItem)

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      itemDos: selectedItem.descripcion,
      editItem: true,
      id: id
    })

    let listValue = JSON.parse(localStorage.getItem('items-list'))
    listValue = this.state.items.filter(item => item.id !== id)
    this.setState({ items: listValue })
    localStorage.setItem('items-list', JSON.stringify(listValue))
  }

  handleComplete = (id) => {
    console.log('hola')
  }

  render() {
    return (
      <div className='container'>
        <TodoInput
          //handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          item={this.state.item}
          itemDos={this.state.itemDos}
          editItem={this.state.editItem}
          handleError={this.handleError}
        />
        <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default App;
