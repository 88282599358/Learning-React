import React from 'react'

function Alert(props) {
    
    const capatilize = (word) =>
    {
        if (!word) return ''; // add a check for undefined or null values
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // {/* props.alert &&:- IT IS like if-else means if props.alert && happens then activate div otherwise No  */}
         props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {capatilize (props.alert.type)}: {props.alert.msgg}
            </div>
    )
}

export default Alert