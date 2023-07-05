import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt={'item img'}/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} UAH</b>
      </div>
    )
  }
}

export default Order