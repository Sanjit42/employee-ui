/* eslint-disable no-undef */
import React, {PropTypes} from 'react';
import Technical from '../technical/Technical';
import Consulting from '../consulting/Consulting';
import Domain from '../domain/Domain';
import Testing from '../testing/Testing';
import {connect} from "react-redux";

class SkillsAndAbilities extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      technical: '',
      consulting: '',
      domain: '',
      testing: '',
      saving: false,
      rating: []
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
        <div>
          <Technical
            technical={this.props.technical}
            rating={this.props.rating}
          />
        </div>

        <div>
          <Consulting
            consulting={this.props.consulting}
            rating={this.props.rating}
          />
        </div>

        <div>
          <Domain
            domain={this.props.domain}
            rating={this.props.rating}
          />
        </div>

        <div>
          <Testing
            testing={this.props.testing}
            rating={this.props.rating}
          />
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
    );
  }
}

SkillsAndAbilities.propTypes = {
  technical: PropTypes.array.isRequired,
  consulting: PropTypes.array.isRequired,
  domain: PropTypes.array.isRequired,
  testing: PropTypes.array.isRequired,
  rating: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    technical: state.technical,
    consulting: state.consulting,
    domain: state.domain,
    testing: state.testing,
    rating: state.rating
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsAndAbilities);
