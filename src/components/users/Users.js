import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';


const Users = ({users, loading}) => {
 
            if(loading){
                return <Spinner />
            }else{
                return (
                    <div className="row container-fluid my-4 mx-auto">
                        {users.map(user => (
                            <UserItem key={user.id} user={user} />
                        ))}
                    </div>
                )
            }

}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    

}

export default Users;
