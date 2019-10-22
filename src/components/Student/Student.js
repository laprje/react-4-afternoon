import React, { Component } from 'react';
import axios from "axios";

export default class Student extends Component {
  constructor() {
    super()
    this.state ={
      studentInfo: {}
    }

  }

  componentDidMount(props) {
    axios
    .get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        studentInfo: res.data
      })
    })
  }

  // goBack = () => {
  //   window.history.back();
  // }

  render(props) {
    return (
      <div className="box">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        <button className="backButton" onClick={this.props.history.goBack} icon='refresh' look='flat'>Back</button>
        <h1>{this.state.studentInfo.first_name}{this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade} </h3>
        <h3>Email: {this.state.studentInfo.email} </h3>
      </div>
    )
  }
}