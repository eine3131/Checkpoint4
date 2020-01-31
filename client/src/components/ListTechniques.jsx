import React, { Component } from 'react';
import './ListTechniques.css';
import axios from 'axios';

class ListTechniques extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techniques: [],
      activeTechniqueFilter: 'Toutes les catégories'
    };
    this.handleSelectValue = this.handleSelectValue.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/technique')
      .then(res => res.data)
      .then(response =>
        this.setState({
          techniques: response
        }))
      .catch(e => {
        console.error(e);
      });
  }

  handleSelectValue(e) {
    this.setState({
      activeTextureFilter: e.target.value
    });
  }

  render() {
    const { techniques, activeTechniqueFilter } = this.state;
    return (
      <div className = "choixCatég">
        <select value={activeTechniqueFilter} onChange={this.handSelectValue}>
          <option className="oneTechn" value="Toutes les catégories"> Toutes les catégories </option>
          {techniques.map((technique, id) => (
            <option key={id} value={technique.type} >
              {technique.type}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ListTechniques;