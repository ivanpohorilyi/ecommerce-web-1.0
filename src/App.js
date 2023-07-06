import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
// commentary
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Yamaha',
          img: 'scooter-5.jpg',
          desc: 'Lorem1 ipsum dolor sit amaet, berofto da sit',
          category: 'Yamaha',
          price: '30000'
        },
        {
          id: 2,
          title: 'Yamaha JOG 50',
          img: 'scooter-5.jpg',
          desc: 'Lorem1 ipsum dolor sit amaet, berofto da sit',
          category: 'Yamaha',
          price: '35000'
        },
        {
          id: 3,
          title: 'Yamaha BWS',
          img: 'scooter-5.jpg',
          desc: 'Lorem1 ipsum dolor sit amaet, berofto da sit',
          category: 'Suzuki',
          price: '31000'
        },
        {
          id: 4,
          title: 'Suzuki GSX-R 600',
          img: 'scooter-5.jpg',
          desc: 'Lorem1 ipsum dolor sit amaet, berofto da sit',
          category: 'Suzuki',
          price: '37500'
        },
        {
          id: 5,
          title: 'Kawasaki Zx6r',
          img: 'scooter-5.jpg',
          desc: 'Lorem1 ipsum dolor sit amaet, berofto da sit',
          category: 'Kawasaki',
          price: '55400'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
   return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
      <Footer />
    </div>
  );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    } 

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
