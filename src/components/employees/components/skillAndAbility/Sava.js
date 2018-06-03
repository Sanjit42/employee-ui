import React from 'react';

const Save = () => {
  return (
    <input
      name="submit"
      disabled={this.state.saving}
      value={this.state.saving ? 'Saving...' : 'Save'}
      onChange={this.upDate}
      className="btn btn-primary"
      onClick={this.onSave}
    />
  );
};

export default Save;
