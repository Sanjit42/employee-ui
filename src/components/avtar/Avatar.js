/* eslint-disable import/namespace */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import DefaultAvatar from '../../resources/images/avatar.svg';
import {bindActionCreators} from 'redux';
import * as avatarActions from "../../actions/avatarActions";


class Avatar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {file: '', imagePreviewUrl: DefaultAvatar};
    this.saveAvatar = this.saveAvatar.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    return this.setState({
      file: file
    });
  }

  saveAvatar(e) {
    e.preventDefault();

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(this.state.file);
    this.props.actions.saveAvatar(this.state.avatar);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl}/>);
    }
    return (
      <div className="previewComponent">
        <input className="fileInput"
               type="file"
               onChange={this.handleImageChange}
        />
        <button className="submitButton"
                type="submit"
                onClick={this.saveAvatar}>Upload Image
        </button>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

Avatar.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    avatar: state.avatar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(avatarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
