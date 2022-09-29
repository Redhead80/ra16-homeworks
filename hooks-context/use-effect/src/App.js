import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
    const [id, setId] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

    useEffect(() => {
        try {
            fetch(url)
                .then(response => response.json())
                .then((users) => {
                    setLoading(false);
                    setUsers(users)
                })

        } catch (e) {
            console.error(e);
        }

    }, []);

    const viewDetails = (id) => {
        setId(id);
    }


   return (
     <div className="App">
        {isLoading ? <div>Loading...</div> : <List users={users} viewDetails={viewDetails}/>}
      <Details id={id}/>
     </div>
   );
}

export default App;
