import React, { Component } from 'react';
import { connect } from 'react-redux';
import { houseUpdate, houseCreate } from '../actions'
import { View, Text } from 'react-native';
import { Box, BoxSection, Input, Button } from './common'

class HouseCreate extends Component {
  onButtonPress() {
    const { name, address } = this.props;
    this.props.houseCreate({ name, address });
  }

  render() {
    return (
      <Box>

        <BoxSection>
        <Input
          label="Name"
          placeholder="name"
          value={this.props.name}
          onChangeText={value => this.props.houseUpdate({ prop: 'name', value })}
        />
        </BoxSection>

        <BoxSection>
        <Input
          label="Address"
          placeholder="XXXX Central Ave"
          value={this.props.phone}
          onChangeText={value => this.props.houseUpdate({ prop: 'address', value })}
        />
        </BoxSection>

        <BoxSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </BoxSection>

      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, address } = state.houseForm;
  return { name, address }
};

export default connect(mapStateToProps, {
  houseUpdate, houseCreate
})(HouseCreate);
