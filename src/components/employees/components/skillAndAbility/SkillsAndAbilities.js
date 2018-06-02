import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import SkillsAndAbilitiesTemplate from './SkillsAndAbilitiesTemplate';
import * as technicalActions from '../../../../actions/testingActions';
import Rating from './Rating';

class SkillsAndAbilities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      skillsAndAbilities: Object.assign([], this.props.skillsAndAbilities),
      template: this.props.template
    };

    this.onSave = this.onSave.bind(this);
  }

  upDate(event) {
    let data = event.target;
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.saveSkillsAndAbilities(this.props.rating, this.props.id);
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
                <Rating rating={each}/>
              </div>
            )}
          </div>

          <input
            name="submit"
            disabled={this.state.saving}
            value={this.state.saving ? 'Saving...' : 'Save'}
            onChange={this.upDate}
            className="btn btn-primary"
            onClick={this.onSave}
          />
        </form>
      </div>
    );
  }
}

SkillsAndAbilities.propTypes = {
  rating: PropTypes.array.isRequired,
  skillsAndAbilities: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired
};


function mapStateToProps(state, ownProps) {
  let id = ownProps.id;
  return {
    skillsAndAbilities: ownProps.skillsAndAbilities,
    rating: state.rating,
    id: id,
    template: ownProps.template
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // technicalActions: bindActionCreators(technicalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsAndAbilities);
