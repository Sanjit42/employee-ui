/* eslint-disable import/namespace */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import _ from 'lodash';

import * as capabilityActions from '../../../actions/capabilityActions';
import CapabilityTemplate from './CapabilityTemplate';

class Capability extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      skills: {...this.props.skills}
    };

    this.onSave = this.onSave.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.skills.employeeId !== nextProps.skills.employeeId) {
      this.setState({skills: nextProps.skills});
    }
  }

  onSave(event) {
    event.preventDefault();
    this.setState({saving: true});
    if (this.props.rating.length > 0) {
      this.props.actions.saveSkills(this.props.rating, this.props.id)
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
    let {skills} = this.state;
    let keys = Object.keys(skills);
    let currentSubset = _.pull(keys, "employeeId");
    return (
      <div className="col-md-12">
        <form>
          <div className="container-fluid">
            {currentSubset.map((each, i) =>
              <CapabilityTemplate
                key={i}
                skills={skills[each]}
                subset={each}
                id={this.props.id}/>
            )}
          </div>
          <input
            name="submit"
            disabled={this.state.saving}
            value={this.state.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.onSave}
          />
        </form>
      </div>
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
