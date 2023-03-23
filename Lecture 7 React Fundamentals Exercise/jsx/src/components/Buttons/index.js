import React from 'react';

export const Buttons = ({ showCancel, showSave, onCancelClick, onSaveClick }) => {
    return (
        <>
            {showCancel && <button onClick={onCancelClick}>Cancel</button>}

            {showSave && <button onClick={onSaveClick}>Save</button>}
        </>
    );
};
