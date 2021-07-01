import React , {useState , useEffect} from 'react'
import LogItem from '../logs/LogItem'
import Loader from '../layout/Loader'

 const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, [])

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        //This will provide use the data
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if(loading){
        return <Loader/>
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
            <h4 className="center">Debug Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No bugs...Complies Well</p>):
            (logs.map(log=> <LogItem log={log} key={log.id} /> ))}
        </ul>
    )
}

export default Logs;