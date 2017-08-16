import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { roommatesFetch } from '../actions';
import ListItem from './ListItem';

class RoommateList extends Component {
  componentWillMount() {
    this.props.roommatesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ roommates }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(roommates)
  }

  renderRow(roommate) {
    return <ListItem roommate={roommate} />
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  const roommates = _.map(state.roommates, (val, uid) => {
    return { ...val, uid };
  })
  return { roommates };
};

export default connect(mapStateToProps, { roommatesFetch })(RoommateList);
