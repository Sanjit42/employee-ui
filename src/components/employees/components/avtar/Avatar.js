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
      file: ''
    };
    this.saveAvatar = this.saveAvatar.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({avatar: nextProps.avatar});
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

    reader.onloadend = () => {
      this.props.actions.saveAvatar({employeeId: this.props.id, image: reader.result})
        .then(() => {
          toastr.success("Image Uploaded Successfully");
        }).catch(error => {
        toastr.error(error);
      });
    };
  }

  render() {
    let {avatar} = this.props;
    let imagePreview = null;
    if (avatar) {
      imagePreview = (<img src={avatar.image}/>);
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
          {imagePreview}
        </div>
        <button onClick={() => this.fileInput.click()}>Pick up</button>
        <button className="submitButton"
                type="submit"
                onClick={this.saveAvatar}>Change Image
        </button>
      </div>
    );
  }
}

Avatar.propTypes = {
  actions: PropTypes.object.isRequired,
  avatar: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    avatar: ownProps.avatar,
    id: ownProps.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(avatarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
