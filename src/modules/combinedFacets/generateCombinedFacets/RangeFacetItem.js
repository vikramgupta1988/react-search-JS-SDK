import React from 'react';
import PropTypes from 'prop-types';

const FacetItem = ({ itemData, facetName, onClick, priceUnit }) => {
    const { from, end, isSelected = false } = itemData;
    const { name: fromName, count, dataId: fromDataId } = from;
    const { name: ToName, dataId: toDataId } = end;

    const handleClick = () => {
        onClick(itemData);
    };

    return (
        <div
            key={`${facetName}_${fromDataId}-${toDataId}`}
            onClick={handleClick}
            className={`UNX-facet__item ${isSelected ? '-selected' : ''}`}
        >
            {priceUnit} {fromName} - {priceUnit} {ToName} - {count}
        </div>
    );
};

FacetItem.propTypes = {
    itemData: PropTypes.object.isRequired,
    facetName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    priceUnit: PropTypes.string.isRequired,
};

export default FacetItem;
