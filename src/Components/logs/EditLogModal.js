import React , {useState , useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import TechSelectOptions from '../Techs/TechSelectOptions'
import M from 'materialize-css/dist/js/materialize.min.js'
import {updateLog} from '../../actions/logActions'

const EditLogModal = ( { current, updateLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [developer, setDeveloper] = useState('');

    useEffect(() => {
        if(current) {
            setMessage(current.message);
            setAttention(current.attention);
            setDeveloper(current.developer)
        }
    }, [current])
    const onSubmit = () =>{
        if(message === '' || developer === ''){
            M.toast({html: 'Please enter a message and developer'})
        }
       else { 
           const updLog = {
               id: current.id,
               message, 
               attention,
               developer,
               date: new Date()
           }

           updateLog(updLog);
           M.toast({html: `Log updated by ${developer}`})
           //Clear fields 
           setMessage(' ');
           setDeveloper(' ');
           setAttention(false);
        }
    }
    return (
        <div id='edit-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Debug Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                        type="text" 
                        name="message"
                        value={message} 
                        onChange = {e=>setMessage(e.target.value)}
                        />
                       
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select 
                        name="developers"
                        className="browser-default"
                        value={developer}
                        onChange={e=>setDeveloper(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Web Developer
                            </option>
                            <TechSelectOptions/>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                type="checkbox" 
                                className="filled-in" 
                                checked={attention}
                                value={attention}
                                onChange={e=>setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!"
                 onClick={onSubmit} 
                 className="modal-close waves-effect waves-green btn">
                     Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle ={
    widht: '75%',
    height: '75%'
}

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, {updateLog })(EditLogModal)
