import React, { Component } from 'react';
import './ListMouvements.css';
import axios from 'axios';

class ListMouvements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouvements: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/api/mouvement`)
      .then(res => res.data)
      .then(response =>
        this.setState({
          mouvements: response
        }))
      .catch(e => {
        console.error(e);
      });
  }

  render() {
    const { activeTechniqueFilter } = this.props;
    const { mouvements } = this.state;
    const filteredMouvements = mouvements
      .filter(mouvement => (!activeTechniqueFilter || mouvement.id === activeTechniqueFilter))
    return (
      <div>
        <div className="mouvements">
          {filteredMouvements.map(mouvement =>
            <div className="amouvement" key={mouvement.id}>
              <img className="imgmvt" alt={mouvement.nom} src={mouvement.image} />
              <p>{mouvement.nom}</p>
            </div>
          )}
        </div>     
      </div >
    );
  }
}
export default ListMouvements;
