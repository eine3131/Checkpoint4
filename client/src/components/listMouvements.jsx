import React, { Component } from 'react';
// import './listMouvement.css';
import axios from 'axios';

class listMouvements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouvements: []
    };
  }

  componentDidMount() {
    axios
      .get(`api/mouvement`)
      .then(res => res.data)
      // console.log(res.data)
      .then(result =>
        this.setState({
          mouvements: result
        }))
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    const { mouvements } = this.state;
    return (
      <div>
        <h2>
          Mouvements
        </h2>
        <ul>
          {mouvements.map(mouvement =>
            <li key={mouvement.id}> {mouvement.image} {mouvement.nom}</li>
          )}
        </ul>
      </div>
    );
  }
}
  export default listMouvements;
