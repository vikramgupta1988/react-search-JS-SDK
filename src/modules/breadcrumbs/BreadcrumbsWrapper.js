import React from 'react';
import PropTypes from 'prop-types';

import BreadCrumbItem from './BreadcrumbItem';
import { List } from '../../components';

const BreadcrumbsWrapper = (props) => {
  const {
    onBreadCrumbClick,
    breadCrumbsList,
    Root,
    separator,
    BreadcrumbItemComponent
  } = props;
  return (
    <div className={'UNX-breadcrumbs__container'}>
      <List
        items={breadCrumbsList}
        idAttribute={'value'}
        ListItem={BreadcrumbItemComponent || BreadCrumbItem}
        Root={Root}
        separator={separator}
        onClick={onBreadCrumbClick}
        className={'UNX-breadcrumbs__list'}
      />
    </div>
  );
};

BreadcrumbsWrapper.propTypes = {
  breadCrumbsList: PropTypes.array,
  onBreadCrumbClick: PropTypes.func.isRequired,
  Root: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node
  ]),
  separator: PropTypes.node,
  BreadcrumbItemComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ])
};

export default BreadcrumbsWrapper;
