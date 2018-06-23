/* eslint-disable import/default,import/namespace */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import StarRatingComponent from 'react-star-rating-component';
import * as ratingActions from '../../../../actions/ratingActions';
import * as defaultValues from '../defaultData/defaultData';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({rating: nextProps.rating});
  }

  onStarClick(nextValue) {
    let {props} = this;
    this.props.actions.updateRatingValue(nextValue, props.topic, props.id, props.template);
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div>
        <StarRatingComponent
          name="rate"
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick}
        />
        {defaultValues.just[this.state.rating]}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  topic: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
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
