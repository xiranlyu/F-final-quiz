import React from 'react';

class TraineeList extends React.Component {
  render = () => {
    return (
      <div className="group">
        <div className="header">
          <h1>学员列表</h1>
        </div>
        <form className="trainee-table">
          <button type="button">添加学员</button>
        </form>
      </div>
    );
  };
}

export default TraineeList;
