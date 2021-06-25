import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'antd';
import Aa from './img/AA.jpg'

import './assets/css/index.scss'

  class About extends React.Component {
      render() {
        return (<div><img src={Aa} />关于沃尔玛</div>);
    }
  }
export default About;