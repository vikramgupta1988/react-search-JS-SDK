export const productTypes = {
    SEARCH: 'SEARCH',
    CATEGORY: 'CATEGORY',
    BROWSE: 'BROWSE',
};

export const searchEvents = {
    BEFORE_API_CALL: 'BEFORE_API_CALL',
    AFTER_API_CALL: 'AFTER_API_CALL',
    ADDED_FACET: 'added_facet',
};

export const searchStatus = {
    READY: 'READY',
    LOADING: 'LOADING',
};

export const displayTypes = {
    LIST: 'LIST',
    DROPDOWN: 'DROPDOWN',
};

export const viewTypes = {
    GRID: 'GRID',
    LIST: 'LIST',
};

export const manageStateTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    RESET: 'RESET',
    CLEAR: 'CLEAR',
};

export const paginationTypes = {
    INFINITE_SCROLL: 'INFINITE_SCROLL',
    CLICK_N_SCROLL: 'CLICK_N_SCROLL',
    FIXED_PAGINATION: 'FIXED_PAGINATION',
};

export const facetTypes = {
    TEXT_FACET: 'TEXT_FACET',
    RANGE_FACET: 'RANGE_FACET',
    MULTILEVEL_FACET: 'MULTILEVEL_FACET',
};
