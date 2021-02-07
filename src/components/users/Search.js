import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
    const [text, setText] = useState('');

    const changeHandler = (e) => setText(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        if(text === ''){
            props.setAlerts('Please enter something', 'dark');
        }else{
            props.searchUsers(text);
            setText('');
        }
        
    }

    const {showClear, clearUsers } = props
    return (
        <div>
            <form action="" onSubmit={submitHandler} className="mt-2">
                <div className="form-group">
                    <input type="text" name="text" className="form-control" value={text} placeholder="Search Github User..." onChange={changeHandler} />
                </div>
                <input type="submit" value="Search" className="btn btn-info btn-block" />
            </form>
            {showClear && <input type="submit" value="Clear" className="btn btn-warning btn-block mt-2" onClick={clearUsers} /> }
            
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlerts: PropTypes.func.isRequired,
}

export default Search;
