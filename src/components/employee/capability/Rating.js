/* eslint-disable import/default,import/namespace */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StarRatingComponent from 'react-star-rating-component';
import * as ratingActions from '../../../actions/ratingActions';
import * as defaultValues from '../defaultData';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating
    };
    this.onStarClick = this.onStarClick.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  handleRating() {
    this.setState({rating: 0})
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({rating: nextProps.rating});
  }

  onStarClick(nextValue) {
    let {actions, topic, template} = this.props;
    actions.updateRatingValue(nextValue, topic, template);
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div className="row ml-0">
        <a onClick={this.handleRating}>
          <FontAwesomeIcon className="mr-2 mt-1" icon="minus-circle"/>
        </a>
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick}
        />
        <div className="ml-2 mt-1">{defaultValues.just[this.state.rating]}</div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  topic: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  template: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    rating: ownProps.rating,
    topic: ownProps.topic,
    template: ownProps.template
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ratingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
