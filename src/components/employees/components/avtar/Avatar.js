/* eslint-disable import/namespace,import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import DefaultAvatar from '../../../../resources/images/avatar.svg';
import * as avatarActions from "../../../../actions/avatarActions";


class Avatar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      file: '',
      avatar: this.props.avatar != '' ? this.props.avatar : DefaultAvatar,
      id: this.props.id
    };
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
        avatar: reader.result
      });
    };

    reader.readAsDataURL(this.state.file);
    this.props.actions.saveAvatar({employeeId: this.state.id, image: this.state.avatar});
  }

  render() {
    let {avatar} = this.state;
    let $imagePreview = null;
    if (avatar) {
      $imagePreview = (<img src={avatar}/>);
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
  actions: PropTypes.object.isRequired,
  avatar: PropTypes.string,
  id: PropTypes.string
};

function findAvatarById(avatar, id) {
  let avatarArray = avatar.filter(avatar => avatar.id == id);
  if (avatarArray) return avatar[0].image;
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.id;
  let avatar = '';
  if (state.avatar.length > 0) {
    avatar = findAvatarById(state.avatar, id);
  }
  return {
    id: ownProps.id,
    avatar: avatar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(avatarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
