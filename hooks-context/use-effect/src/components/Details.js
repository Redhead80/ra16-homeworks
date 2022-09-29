import React, {useEffect, useState} from 'react';

function Details (props) {
    const {id} = props;
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        if(typeof(id) === 'number') {
            try {
                fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
                    .then(response => response.json())
                    .then((result) => {
                        setUser(result);
                        setLoading(false);
                        setAvatar('');
                        setAvatar(result.avatar);
                        console.log(result);
                    })

            } catch (e) {
                console.error(e);
            }
        }
    }, [id]);

    return (
        <div>
            {!isLoading ? <div className='user-details'>
                <div>
                    <img src={avatar} alt='' key={user.name}/>
                </div>
                <div className='user-name'>{user.name}</div>
                <div>City: {user.details.city}</div>
                <div>Company: {user.details.company}</div>
                <div>Position: {user.details.position}</div>
            </div> : ''
            }
        </div>
    )
}

export default Details;
