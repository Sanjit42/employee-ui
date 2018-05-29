import React, {PropTypes} from 'react';
import {connect} from "react-redux";

import SkillsAndAbilitiesTemplate from './SkillsAndAbilitiesTemplate';

class SkillsAndAbilities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      skillsAndAbilities: []
    };

    this.onSave = this.onSave.bind(this);
  }

  upDate(event) {
    let data = event.target;
  }

  onSave(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form>
        {this.props.skillsAndAbilities.map(each =>
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
  skillsAndAbilities: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    skillsAndAbilities: state.skillsAndAbilities
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsAndAbilities);
