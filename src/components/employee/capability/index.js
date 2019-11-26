/* eslint-disable import/namespace */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import _ from 'lodash';

import * as capabilityActions from '../../../actions/capabilityActions';
import Skills from './Skills';
import SkillGroup from './SkillGroup';

class Capability extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      skills: {...this.props.skills},
      collapse: 'hide'
    };

    this.onSave = this.onSave.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.skills.employeeId !== nextProps.skills.employeeId) {
      this.setState({skills: nextProps.skills});
    }
  }

  handleCollapse() {
    if (this.state.collapse === 'hide') {
      this.setState({collapse: 'show'});
    } else {
      this.setState({collapse: 'hide'});
    }
  }

  onSave(event) {
    const {actions, id, rating} = this.props;
    event.preventDefault();
    this.setState({saving: true});
    if (rating.length > 0) {
      actions.saveSkills(rating, id)
        .then(() => {
          this.setState({saving: false});
          toastr.success("Skills updated");
        })
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    } else {
      this.setState({saving: false});
    }
  }

  render() {
    let {skills, collapse} = this.state;
    let keys = Object.keys(skills);
    let subsets = _.pull(keys, "employeeId");

    return (
      <form>
        <div className="skill-container">
          {collapse === 'hide' ?
            <Skills
              handleCollapse={this.handleCollapse}
              label="Edit Skills & Abilities"
            /> :
            <SkillGroup
              id={this.props.id}
              label="Cancel"
              skills={skills}
              subsets={subsets}
              onSave={this.onSave}
              handleCollapse={this.handleCollapse}
            />
          }
        </div>
      </form>
    );
  }
}

Capability.propTypes = {
  rating: PropTypes.array.isRequired,
  skills: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    skills: ownProps.skills,
    rating: state.rating,
    id: ownProps.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(capabilityActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Capability);
