import React, { Component } from 'react';
import './index.scss';
import { Page1Connet } from "../page1/page1.connect.jsx"
export default class Page3 extends Component {
  render() {
    return (
      <div className="page3"> 
      <Page1Connet></Page1Connet>
       </div>
    );
  }
}