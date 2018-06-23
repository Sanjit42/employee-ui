/* eslint-disable import/no-unresolved,no-constant-condition,import/namespace,import/default */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import * as avatarActions from "../../../../actions/avatarActions";
import Spinner from '../../../../resources/images/puff.svg';

class Avatar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      file: '',
      uploading: false
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
    this.setState({uploading: true});
    e.preventDefault();

    let reader = new FileReader();
    reader.readAsDataURL(this.state.file);

    reader.onloadend = () => {
      this.props.actions.saveAvatar({employeeId: this.props.id, image: reader.result})
        .then(() => {
          this.setState({uploading: false});
          toastr.success("Image Uploaded Successfully");
        }).catch(error => {
        this.setState({uploading: false});
        toastr.error(error);
      });
    };
  }

  render() {
    if (this.state.uploading) {
      return (
        <div>
          <img src={Spinner}/>
        </div>
      );
    } else {
      let {avatar} = this.props;
      let imagePreview = null;
      if (avatar) {
        imagePreview = (<img style={{width: '25%', height: '30%'}} src={avatar.image}/>);
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
