import React from 'react';
import PropTypes from 'prop-types';

const RepoItem= ({repo}) => {
    return (
        <div className="card">
            <h5 className="px-3 py-2">
                <a target="_blank" href={repo.html_url}>{repo.name}</a>
            </h5>
        </div>
    );
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem;
