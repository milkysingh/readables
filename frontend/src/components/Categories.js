import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories } from '../actions';

class Category extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    console.log(this.props.categories);
    return <div>category</div>;
  }
}

Category.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};
const mapDispatchToProps = dispatch => ({
  getCategories: () => {
    dispatch(getCategories());
  },
});

const mapStateToProps = state => ({
  categories: state.category,
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
