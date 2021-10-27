import {useState} from 'react';
import Output from './Output';

function Greetings(){
    const [changeText, setChangeText] = useState();
    const changeTextHandler = () => {
        setChangeText(true);
    }
    return(
        <div>
            <h2>Hello world</h2>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Changed!</Output>}
            <button id='btn-change' onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}

export default Greetings;