import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories } from '../../actions';
import classes from './categories.css';

class Category extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const renderCategories = this.props.categories
      ? this.props.categories.map(cat => (
        <li key={cat.name} className={classes.clistItem}>
          {cat.name}
        </li>
      ))
      : '';
    return (
      <div>
        <ul className={classes.clist}>{renderCategories}</ul>
      </div>
    );
  }
}

Category.propTypes = {
  getCategories: PropTypes.func,
  categories: PropTypes.array,
};
Category.defaultProps = {
  getCategories: null,
  categories: [],
};

const mapStateToProps = ({ category: { categories } }) => ({
  categories,
});
export default connect(mapStateToProps, { getCategories })(Category);
