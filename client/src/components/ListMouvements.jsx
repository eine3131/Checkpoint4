import React, { Component } from 'react';
import './listMouvements.css';
import axios from 'axios';

class ListMouvements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouvements: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/mouvement`)
      .then(res => res.data)
      // console.log(res.data)
      .then(response =>
        this.setState({
          mouvements: response
        }))
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    const { mouvements } = this.state;
    return (
      <div>
        <h1>
          Mouvements
        </h1>
        <div className = "mouvements">
          {mouvements.map(mouvement =>
            <div className = "amouvement" key={mouvement.id}> 
            {mouvement.image} 
            {mouvement.nom}
            </div>
          )}
        </div>
      </div>
    );
  }
}
  export default ListMouvements;
