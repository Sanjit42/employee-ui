import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import SkillsAndAbilitiesTemplate from './SkillsAndAbilitiesTemplate';
import * as skillsAndAbilitiesActions from '../../../../actions/skillsAndAbilitiesActions';

class SkillsAndAbilities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      skillsAndAbilities: Object.assign([], this.props.skillsAndAbilities)
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
      <form>
        {this.state.skillsAndAbilities.map(each =>
          <div>
            <SkillsAndAbilitiesTemplate skillsAndAbilities={each}/>
          </div>
        )}
        <input
          name="submit"
          disabled={this.state.saving}
          value={this.state.saving ? 'Saving...' : 'Save'}
          onChange={this.upDate}
          className="btn btn-primary"
          onClick={this.onSave}
        />
      </form>
    );
  }
}

SkillsAndAbilities.propTypes = {
  rating: PropTypes.array.isRequired,
  skillsAndAbilities: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};


function mapStateToProps(state, ownProps) {
  let id = ownProps.params.id;
  return {
    skillsAndAbilities: ownProps.skillsAndAbilities,
    rating: state.rating,
    id: id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(skillsAndAbilitiesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsAndAbilities);
