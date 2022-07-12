import React, { Component } from "react";


class App extends ReactComponent {
  constructor(props){
    super(props);
   
    this.state = {
      newItem: "",
      list:[] 
    }
  }


  updateInput(Key, value){
    //update reset state
    this.setState({
    });
  }
  addItem(){
    //create item with unique id
    const newItem={
      id: 1+ math.random(),
      value: this.state.newItem.slice()
    };

    //copy of  current list of items
    const list =[...this.state.list];

    //add new  item to the list
    list.push(newItem);

    //upadte state with new list  and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  }

  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !==id);

    this.setState({list: updatedList});
  }
  render() {
    return (
      <div  className="App">
         <div>
          Add an Item...
          <br/>
          <input
            type="text"
            placeholder="Type an Item...."
            value={this.state.newItem}
            onChange={ this.updateInput ("newItem", e.target.value)}
            />
            <button
            onClick={() => this.addItem()}
            >
              Add
              </button>
              <br/>
              <ul/>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    {item.value}
                    <button
                    onClick={() => this.deleteItem(item.id)}
                    >
                    X
                    </button>
      
                  </li>
                )
              }
                )}
        </div>
      
       </div> )}}