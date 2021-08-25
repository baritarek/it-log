import React from 'react'
import PropTypes from 'prop-types'

const TechItem = (developers) => {
    return (
        <li className="collection-item">
            <div>
                {developers.firstName} {developers.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">Delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    developers: PropTypes.object.isRequired,

}

export default TechItem
