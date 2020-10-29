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
