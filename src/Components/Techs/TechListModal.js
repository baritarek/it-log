import React , {useEffect} from 'react'
import TechItem from './TechItem'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getDevelopers} from '../../actions/techActions'

 const TechListModal = ({getDevelopers , developers: {developers, loading}}) => {
   
    useEffect(() => {
        getDevelopers();
        // eslint-disable-next-line
    }, [])


    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Developer List</h4>
                <ul className="collection">
                    {!loading && developers !== null &&
                    developers.map(developers => <TechItem developers={developers} key={developers.id} /> )}
                </ul>
            </div>
        </div>
    )
}

TechListModal.protoTypes = {
    developers: PropTypes.object.isRequired,
    getDevelopers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    developers: state.developers
})

export default connect(mapStateToProps , {getDevelopers})(TechListModal);