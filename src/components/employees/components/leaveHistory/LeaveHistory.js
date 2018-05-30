import React, {PropTypes} from 'react';

const LeaveHistory = ({leaveHistory}) => {
  return (
    <div>
      <h1>Leave History</h1>
      {leaveHistory.map(leave =>
        <div>
          <h4>{leave.type}</h4>
          <div>{leave.from}</div>
          <div>{leave.to}</div>
        </div>
      )}
    </div>
  );
};

LeaveHistory.propTypes = {
  leaveHistory: PropTypes.object
};

export default LeaveHistory;
