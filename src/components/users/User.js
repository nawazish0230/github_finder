import React, {Fragment, useEffect} from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import {Link} from 'react-router-dom';

const User = (props) => {

    // componentDidMount(){
    //     this.props.getUser(props.match.params.login);
    //     this.props.getUserRepos(props.match.params.login);
    // }
    useEffect(() => {
        props.getUser(props.match.params.login);
        props.getUserRepos(props.match.params.login);
        // eslint-disabl-next-line
    }, [])


    // console.log(this.props.user);
    const {
        name,
        avatar_url,
        company,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = props.user;

    const {loading, repos} = props;
    if(loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/search' className="btn btn-light" >Back to Search</Link>
            Hireable: {' '}
            {hireable ? (
                <i className="fa fa-check-circle-o text-success"></i>
            ) : (
                <i className="fa fa-check-circle-o text-danger" />
            )}
            <div className="card mt-4 p-4">
                <div className="row">
                    <div className="col-lg-4 px-3">
                        <img src={avatar_url} width="230" alt=""/>
                        <h2 className="mt-3">{name}</h2>
                        <p><b>location</b>: {location}</p>
                    </div>
                    <div className="col-lg-8">
                        {
                            bio && (
                                <Fragment>
                                    <b>Bio : </b>
                                    <p>{bio}</p>
                                </Fragment>
                            )
                        }
                        {
                            login && <Fragment>
                                <p><b>Username : </b> {login}</p>
                            </Fragment>
                        }
                        {
                            company && <Fragment>
                                <p><b>Company : </b> {company}</p>
                            </Fragment>
                        }
                        {
                            blog && <Fragment>
                                <p><b>Website : </b> {blog}</p>
                            </Fragment>
                        }
                        <a href={html_url} target="_blank" className='btn btn-dark my-1'>View Github Profile</a>
                    </div>
                </div>
            </div>
            <div className="border p-3 text-center">
                <span className="badge badge-primary mx-2 p-2">Followers: {followers}</span>
                <span className="badge badge-success mx-2 p-2">Following: {following}</span>
                <span className="badge badge-info mx-2 p-2">Public Repos: {public_repos}</span>
                <span className="badge badge-dark mx-2 p-2">Public Gists: {public_gists}</span>
            </div>

            <Repos repos={repos} />
        </Fragment>
    )
}

User.propsTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
}

export default User;
