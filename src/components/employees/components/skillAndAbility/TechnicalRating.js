/* eslint-disable import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import StarRatingComponent from 'react-star-rating-component';
import * as technicalActions from '../../../../actions/technicalActions';

class TechnicalRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue) {
    this.props.actions.updateTechnicalSkills(nextValue, this.props.ratingWithType, this.props.id);
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}

TechnicalRating.propTypes = {
  rating: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  ratingWithType: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  let id = ownProps.id;
  let {rating} = ownProps;
  let noOfRating = Object.values(rating);
  return {
    rating: noOfRating[0],
    ratingWithType: rating,
    id: id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(technicalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnicalRating);
