import React , {useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTechs } from '../../actions/techActions';

const TechSelectOptions = ({getTechs , developer: {developers, loading}}) => {
    useEffect(() => {
        getDevelopers();
        //eslint-disable-next-line
    }, [])
    return (
       !loading && developers !== null && developers.map(d => (<option key={d.id} value={`${d.firstName} ${d.lasName}`}>
           {d.firstName} {d.lastName}
       </option>))
    )
}

TechSelectOptions.propTypes = {
    developer: PropTypes.object.isRequired,
    getDevelopers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    developer: state.developer
})
export default TechSelectOptions
