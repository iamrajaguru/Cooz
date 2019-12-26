import React, { Component } from 'react';

class MapHoc extends Component {
  render() {
    return (
      <div>
        {this.props.mapValue.map((v, k) => (
          <div className="alert alert-success" role="alert" key={k}>
            <p key={k}>
              {v.item}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default MapHoc;
