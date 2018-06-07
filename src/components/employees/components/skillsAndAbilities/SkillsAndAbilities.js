/* eslint-disable import/namespace */
import React, {PropTypes} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as types from '../../../../constants/constant';

import * as skillsAndAbilitiesActions from '../../../../actions/skillsAndAbilitiesActions';
import SkillsAndAbilitiesTemplate from './SkillsAndAbilitiesTemplate';
import Rating from './Rating';

class SkillsAndAbilities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      skillsAndAbilities: Object.assign({}, this.props.skillsAndAbilities)
    };

    this.onSave = this.onSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.skillsAndAbilities.employeeId != nextProps.skillsAndAbilities.employeeId){
      this.setState({skillsAndAbilities: nextProps.skillsAndAbilities});
    }
  }

  upDate(event) {
    let data = event.target;
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.saveSkillsAndAbilities(this.props.rating, this.props.id);
  }

  render() {
    let {skillsAndAbilities} = this.state;
    return (
      <div className="col-md-12">
        <form>
          <div className="container-fluid">
            {types.subset.map(each =>
              <div className="col-md-6">
                <SkillsAndAbilitiesTemplate
                  skillsAndAbilities={skillsAndAbilities[each]}
                  subset={each}
                  id={this.props.id}/>
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
  skillsAndAbilities: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};


function mapStateToProps(state, ownProps) {
  let id = ownProps.id;
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
