import React, { Component, useState } from 'react'
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
import UseEffect from './Component/ReactHooks/UseEffect';
import CustomIndex from './Component/ReactHooks/CustomIndex';
import DataFetchClass from './Component/ReactHooks/DataFetchClass';
import DataFetchFunction from './Component/ReactHooks/DataFetchFunction';
import RenderIndex from './Component/ConditionalRendering/RenderIndex';
import UseEffectAPI from './Component/FetchAPI/UseEffectAPI';
import Broadcasting from './Project/Broadcasting';
import ContactList from './Project/ContactList';

export class App extends Component {
  render() {
    return (
      <div className="App">
      <Broadcasting />
      {/* <ContactList /> */}
      {/* <UseEffectAPI /> */}
      {/* <RenderIndex /> */}
      {/* <DataFetchFunction /> */}
      {/* <DataFetchClass /> */}
      {/* <CustomIndex /> */}
      {/* <UseEffect /> */}
    {/* <UseState /> */}
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
