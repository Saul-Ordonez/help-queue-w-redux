import React, { useState } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm2(props) {
    [names, setNames] = useState('');
    [location, setLocation] = useState('');
    [issue, setIssue] = useState('');
    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        const action = {
            type: 'ADD_TICKET',
            ticket: {
                id: v4(),
                names,
                location,
                issue,
                timeOpen: new Date().getTime(),
            },
        };
        props.dispatch(action);
        setNames('');
        setLocation('');
        setIssue('');
    }

    return (
        <div>
            <form onSubmit={handleNewTicketFormSubmission}>
                <input
                    type="text"
                    placeholder="Pair Names"
                    onChange={e => setState(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    onChange={e => setState(e.target.value)}
                />
                <textarea
                    placeholder="Describe your issue."
                    onChange={e => setState(e.target.value)}
                />
                <button type="submit">Help!</button>
            </form>
        </div>
    );
}

NewTicketForm2 = connect()(NewTicketForm2);

export default NewTicketForm2;
