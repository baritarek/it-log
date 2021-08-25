import React , {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [developer, setDeveloper] = useState('');

    const onSubmit = () =>{
        if(message === '' || developer === ''){
            M.toast({html: 'Please enter a message and developer'})
        }
       else { 
           console.log(message,developer,attention)

           //Clear fields 
           setMessage('');
           setDeveloper('');
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
                        <label htmlFor="message" className='active'>Debug Message</label>
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
                            <option value="John Smith">John Smith</option>
                            <option value="Albert Don">Albert Don</option>
                            <option value="Bari White">Bari White</option>
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

export default EditLogModal
