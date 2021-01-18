import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Saqib');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Saud');
        setAge(30)
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target);
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <h3>{name} is {age} years old.</h3>
            <button onClick={handleClick}>Click here</button>
            
            {/* <button onClick={(e) => handleClickAgain('Saud', e)}>Click here again</button> */}
        </div>
    );
}
 
export default Home;