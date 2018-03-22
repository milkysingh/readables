import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, getPostsByCategory } from '../../actions';
import classes from './categories.css';

class Category extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const renderCategories = this.props.categories
      ? this.props.categories.map(cat => (
        <li key={cat.name} className={classes.clistItem}>
          <button
            className={classes.clistButton}
            onClick={() => this.props.getPostsByCategory(cat.name)}
          >
            {' '}
            {cat.name}
          </button>
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
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array,
  getPostsByCategory: PropTypes.func.isRequired,
};
Category.defaultProps = {
  categories: [],
};

const mapStateToProps = ({ category: { categories } }) => ({
  categories,
});

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: category => dispatch(getPostsByCategory(category)),
  getCategories: () => dispatch(getCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Category);
