import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const MobileMenu = (props) => {
    const {
        categoryPathLinks,
        handleCategoryLinkClick,
        handleShow,
        productType,
    } = props;
    return (
        <div className="UNX-mobileMenu UNX-mobileView">
            <Dropdown className="UNX-categoryLink__dropdown">
                <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    size="md"
                >
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {categoryPathLinks.map(
                        ({ path, id, label, isSelected }) => {
                            return (
                                <Dropdown.Item
                                    className={`menu-items ${
                                        isSelected && productType === 'CATEGORY'
                                            ? 'active'
                                            : ''
                                    }`}
                                    data-unx_path={path}
                                    key={id}
                                    onClick={handleCategoryLinkClick}
                                >
                                    <Link
                                        className="menu-item-link"
                                        data-unx_path={path}
                                        to={`/${id}`}
                                    >
                                        {label}
                                    </Link>
                                </Dropdown.Item>
                            );
                        }
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <div className="UNX-fiterIcon" onClick={handleShow}>
                <i className="fa fa-filter" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default MobileMenu;
