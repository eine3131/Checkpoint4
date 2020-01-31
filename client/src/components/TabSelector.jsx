import React, { Component } from 'react';

class TabSelector extends Component {
  
  render() {
    const { activeId } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="Histoire"
          onClick={this.props.handleChangeTab}
          className={activeId === 'histoire' ? 'active' : ''}
        >
          Histoire.
        </button>
        <button
          id="Les techniques"
          onClick={this.props.handleChangeTab}
          className={activeId === 'techniques' ? 'active' : ''}
        >
          Les techniques.
        </button>
        <button
          id="Page de l'administrateur"
          onClick={this.props.handleChangeTab}
          className={activeId === 'admin' ? 'active' : ''}
        >
          Page de l'administrateur.
        </button>
      </div>
    );
  }
}

export default TabSelector;