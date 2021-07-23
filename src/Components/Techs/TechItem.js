import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {deleteTech} from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({developers: {id , firstName , lastName} , deleteDeveloper}) => {
    const onDelete = () => {
        deleteDeveloper(id);
        M.toast({html: 'Developer delted'})
    }
    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                {developers.firstName} {developers.lastName}
                <a href="#!" className="secondary-content" onClick={onDelete}>
                    <i className="material-icons grey-text">Delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    developers: PropTypes.object.isRequired,
    deleteDeveloper: PropTypes.func.isRequired,

}

export default connect(null , {deleteDeveloper}) (TechItem)
