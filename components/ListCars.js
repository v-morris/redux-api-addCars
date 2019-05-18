import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    cars: state.cars
  }
}

const ListCars = (props) => (

  <div>
  <h3 className="title" >Vehicles</h3>
  <div className="vehicles"  >
    {props.cars.map(c =>
      <div className="vehicle-box" >
        <h5>{c.make} {c.model}</h5>
        <img src="https://picsum.photos/200/150?random7" />
      </div>

    )}
  </div>
</div>
)

export default connect(mapStateToProps)(ListCars);