import React, { Component } from 'react';
import './App.scss';
import GroupList from './component/GroupList/GroupList';
import TrainerList from './component/TrainerList/TrainerList';
import TraineeList from './component/TraineeList/TraineeList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        Hello World
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
// TODO GTB-工程实践: - 没有按照tasking提交
// TODO GTB-知识点: + 第一层组件划分合理
// TODO GTB-综合: - 代码太少无法看出各个维度的问题
