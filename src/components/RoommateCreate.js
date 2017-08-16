import React, { Component } from 'react';
import { connect } from 'react-redux';
import { roommateUpdate, roommateCreate } from '../actions'
import { View, Text } from 'react-native';
import { Box, BoxSection, Input, Button } from './common'

class RoommateCreate extends Component {
  onButtonPress() {
    const { name, phone } = this.props;
    this.props.roommateCreate({ name, phone });
  }

  render() {
    return (
      <Box>

        <BoxSection>
        <Input
          label="Name"
          placeholder="name"
          value={this.props.name}
          onChangeText={value => this.props.roommateUpdate({ prop: 'name', value })}
        />
        </BoxSection>

        <BoxSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={value => this.props.roommateUpdate({ prop: 'phone', value })}
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
  const { name, phone } = state.roommateForm;
  return { name, phone }
};

export default connect(mapStateToProps, {
  roommateUpdate, roommateCreate
})(RoommateCreate);
