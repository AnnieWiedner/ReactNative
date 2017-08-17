import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { housesFetch } from '../actions';
import ListHouse from './ListHouse';

class HouseList extends Component {
  componentWillMount() {
    this.props.housesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ houses }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(houses)
  }

  renderRow(house) {
    return <ListHouse house={house} />
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
  const houses = _.map(state.houses, (val) => {
    return { ...val};
  })
  return { houses };
};

export default connect(mapStateToProps, { housesFetch })(HouseList);
