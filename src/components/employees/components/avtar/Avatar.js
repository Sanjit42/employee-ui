/* eslint-disable import/no-unresolved */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import * as avatarActions from "../../../../actions/avatarActions";

class Avatar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      file: '',
      avatar: this.props.avatar,
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
    reader.readAsDataURL(this.state.file);

    this.props.actions.saveAvatar({employeeId: this.state.id, image: this.state.avatar})
      .then(res => {
        toastr.success("Image Uploaded Successfully");
        reader.onloadend = () => {
          this.setState({
            avatar: reader.result
          });
        };
      }).catch(error => {
      toastr.error(error);
    });
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
               accept="image/jpeg"
               style={{display: 'none'}}
               type="file"
               onChange={this.handleImageChange}
               ref={fileInput => this.fileInput = fileInput}
        />
        <div className="imgPreview">
          {$imagePreview}
        </div>
        <button onClick={() => this.fileInput.click()}>Pick up</button>
        <button className="submitButton"
                type="submit"
                onClick={this.saveAvatar}>Upload Image
        </button>
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
