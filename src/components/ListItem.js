
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';

import CardSection from "./common/CardSection";
import { connect } from 'react-redux';
import * as actions from '../actions';


class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1, padding: 5 }}>{library.description}</Text>
        </CardSection>
      )
    }
    return null;
  }
  render() {
    const { library } = this.props;
    const { id, title } = this.props.library;

    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.title}> {title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded: expanded }
}
export default connect(mapStateToProps, actions)(ListItem);