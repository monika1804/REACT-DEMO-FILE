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
import FAQ from './FAQ/FAQ';
import IndexDemo from './Component/Graphql/IndexDemo';
import FileUplaod from './importantNotes/FileUpalod';
import LineGraph from './Component/LineChat/LineGraph';
import BarGraph from './Component/LineChat/BarGraph';
import SmsToPort from './Component/SMS/SmsToPort';
import FaqLogin from './FAQ/FaqLogin';
import AverageSummary from './Component/LineChat/AverageSummary';
import ActivateChatbot from './FAQ/ActivateChatbot';
import Login from './Component/LoginScreen/Login';
import PopupMessage from './Component/PopupMessage';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FaqLogin /> */}
        {/* <ActivateChatbot /> */}
        {/* <Login /> */}
        {/* <PopupMessage /> */}
        {/* <SmsToPort /> */}
        {/* <FAQ /> */}
        {/* <IndexDemo /> */}
        {/* <Broadcasting /> */}
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
        {/* <FileUplaod /> */}
        <LineGraph />
        <BarGraph />
        {/* <AverageSummary /> */}
      </div>
    )
  }
}

export default App
