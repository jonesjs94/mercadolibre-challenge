import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {loadData} from '../actions';
import UserInfo from '../components/UserInfo.jsx';
import ItemList from '../components/ItemList.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.loadData('user', 'userId=1', 'USER');
  }

  render() {
    return (
      <div className="container">
        <UserInfo user={this.props.user} />
        <ItemList />
      </div>
    )
  }
}

const mapPropsToState = state => ({
  user: state.user.data,
  level: state.level.data,
  purchases: state.user. data
});

const mapDispatchToProps = dispatch => ({
  loadData: (route, param, actionType) => dispatch(loadData(route, param, actionType))
});

export default connect(mapPropsToState, mapDispatchToProps)(Profile);