import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import StarRatingComponent from 'react-star-rating-component';

import SkillsAndAbilitiesTemplate from './SkillsAndAbilitiesTemplate';
import * as technicalActions from '../../../../actions/testingActions';
import TechnicalRating from './TechnicalRating';

class TechnicalSkills extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      skillsAndAbilities: Object.assign([], this.props.skillsAndAbilities),
      template: this.props.template
    };

    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue) {
    this.props.actions.updateRating(nextValue, this.props.ratingWithType);
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div className="col-md-12">
        <form>
          <div className="container-fluid">
            <h2>{this.props.template}</h2>
            {this.state.skillsAndAbilities.map(each =>
              <div>
                {Object.keys(each)}
                <TechnicalRating rating={each} id={this.props.id}/>
              </div>
            )}
          </div>


        </form>
      </div>
    );
  }
}

TechnicalSkills.propTypes = {
  skillsAndAbilities: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired
};


function mapStateToProps(state, ownProps) {
  let id = ownProps.id;
  return {
    skillsAndAbilities: ownProps.skillsAndAbilities,
    id: id,
    template: ownProps.template
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(technicalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TechnicalSkills);
