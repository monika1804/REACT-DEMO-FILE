import React, { Component } from 'react'
import './index.css';
// import UserGreeting from './Component/UserGreeting'
// import ListRendering from './Component/ListRendering'
// import StyleSheet from './Component/StyleSheet';
// import Inline from './Component/Inline';
// import './appStyle.css'
// import styles from './appStyle.modules.css'
// import Form from './Component/Form';
import LifeCycleA from './Component/LifeCycleA';
import FragmentDemo from './Component/FragmentDemo';
import Table from './Component/Table';
import ParentComp from './Component/ParentComp';
import RefsDemo from './Component/RefsDemo';
import FocusInput from './Component/FocusInput';
import FRParentInput from './Component/FRParentInput';
import MemoComponent from './Component/Memo';
import UseState from './Component/ReactHooks/UseState';

export class App extends Component {
  render() {
    return (
      <div className="App">
    <UseState />
      {/* <FRParentInput /> */}
    {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
        {/* <Form /> */}
        {/* <h1 className="error">Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}
        {/* <ListRendering /> */}
          {/* <UserGreeting />  */}
           {/* <StyleSheet primary={true} /> */}
          {/* <Inline /> */}
      </div>
    )
  }
}

export default App
