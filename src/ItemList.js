import React from 'react'

class ItemList extends React.Component{
    render() {
        return (
          <ul>
            {this.props.items.map(item => <li key={item.id}>{item.value}</li>)}
          </ul>
        );
      }
}
export default ItemList;