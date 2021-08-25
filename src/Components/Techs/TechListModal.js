import React , {useState , useEffect} from 'react'
import TechItem from './TechItem'

 const TechListModal = () => {
     const [developers, setDevelopers] = useState([]);
     const [loading, setLoading] = useState(false);

   

    useEffect(() => {
        getDevelopers();
        // eslint-disable-next-line
    }, [])

    const getDevelopers = async () => {
        setLoading(true);
        const res = await fetch('/developers');
        //This will provide use the data
        const data = await res.json();

        setDevelopers(data);
        setLoading(false);
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Developer List</h4>
                <ul className="collection">
                    {!loading && 
                    developers.map(developers => <TechItem developers={developers} key={developers.id} /> )}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal;