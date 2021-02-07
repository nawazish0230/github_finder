import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserItem = ({user : {login, avatar_url, html_url}}) => {

    return (
            <div className="card col-lg-3 col-md-4 col-12 px-0 mx-auto ">
                <img src={avatar_url} className="card-img-top" style={{height: '220px'}} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{login}</h4>
                    <Link to={`/user/${login}`} className="btn btn-info">More</Link>
                </div>
            </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
