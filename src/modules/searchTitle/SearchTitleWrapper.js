import React from 'react';
import PropTypes from 'prop-types';

import { paginationTypes, productTypes } from '../../config';

const SearchTitleWrapper = (props) => {
    const {
        searchQuery,
        start,
        productsLn,
        SearchTitleItem,
        numberOfProducts,
        productType,
        paginationType,
    } = props;

    if (searchQuery.length === 0 && numberOfProducts === 0) {
        return null;
    }

    let formattedQuery = searchQuery;
    if (productType === productTypes.CATEGORY) {
        const keyStr = 'categoryPath:';
        if (searchQuery.indexOf(keyStr) > -1) {
            formattedQuery = formattedQuery.split(keyStr)[1];
            formattedQuery = formattedQuery.slice(1, -1);
        }
    }

    const startProduct =
        paginationType === paginationTypes.FIXED_PAGINATION ? start + 1 : 1;

    return SearchTitleItem ? (
        <SearchTitleItem {...props} />
    ) : (
        <div className="UNBXD-searchTitle__container">
            Showing results for
            <span className="-query"> {formattedQuery}</span>
            {numberOfProducts !== 0 && (
                <span className="-pageDescription">
                    - {startProduct} to {start + productsLn} of{' '}
                    {numberOfProducts} products
                </span>
            )}
        </div>
    );
};

SearchTitleWrapper.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    start: PropTypes.number,
    productsLn: PropTypes.number,
    numberOfProducts: PropTypes.number.isRequired,
    SearchTitleItem: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    productType: PropTypes.string.isRequired,
    paginationType: PropTypes.string.isRequired,
};

export default SearchTitleWrapper;
