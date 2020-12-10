export function toggleViewLess(stateKey, event) {
    const facetName = event.target.dataset['unx_name'];
    this.setState((existingState) => {
        const updatedFacets = existingState[stateKey].map((facetValue) => {
            if (facetValue.facetName === facetName) {
                return {
                    ...facetValue,
                    viewLess: !facetValue.viewLess
                };
            }
            return { ...facetValue };
        });

        return {
            ...existingState,
            [stateKey]: updatedFacets
        };
    });
}

export function handleCollapseToggle(stateKey, event) {
    const facetName = event.target.dataset['unx_name'];
    this.setState((existingState) => {
        const updatedFacets = existingState[stateKey].map((facetValue) => {
            if (facetValue.facetName === facetName) {
                return {
                    ...facetValue,
                    isOpen: !facetValue.isOpen
                };
            }
            return { ...facetValue };
        });

        return {
            ...existingState,
            [stateKey]: updatedFacets
        };
    });
}

export function handleFilterChange(stateKey, event) {
    const { name: facetId, value } = event.target;
    this.setState((existingState) => {
        const updatedFacets = existingState[stateKey].map((facetValue) => {
            if (
                facetId === facetValue.facetName ||
                facetId === facetValue.filterField
            ) {
                return { ...facetValue, filter: value.toLowerCase() };
            }
            return { ...facetValue };
        });

        return { ...existingState, [stateKey]: updatedFacets };
    });
}
