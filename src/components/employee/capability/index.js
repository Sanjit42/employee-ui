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
    let subsets = _.pull(keys, "employeeId");

    return (
      <div className="skill-container">
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 style={{height: "70px"}}>
                <h2 className="d-inline mr-5">SKILLS & ABILITIES</h2>
                <button className="d-inline edit-skills" data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true" onClick={this.handleCollapse}
                        aria-controls="collapseOne">
                  Edit Skills & Abilities
                </button>
              </h5>
            </div>

            <div id="collapseOne" className={`collapse ${this.state.collapse}`}
                 aria-labelledby="headingOne"
                 data-parent="#accordion">
              <ul className="rating">
                {
                  subsets.map((subnet, i) => {
                    return (
                      <CapabilityTemplate
                        key={i}
                        skills={skills[subnet]}
                        subset={subnet}
                        id={this.props.id}/>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
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
