import React, {PropTypes} from 'react';

const LeaveHistory = ({leaveHistory}) => {
  return (
    <div>
      <h1>Leave History</h1>
      <div>
        <h4>{leaveHistory.leaveType}</h4>
        <div>{leaveHistory.leaveFrom}</div>
        <div>{leaveHistory.leaveTo}</div>
      </div>
    </div>
  );
};

LeaveHistory.propTypes = {
  leaveHistory: PropTypes.object
};

export default LeaveHistory;
