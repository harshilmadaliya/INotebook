import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Alerts(props) {

    const cepitalize = (word)=>{
        if(word === "danger" ){
            word = 'Error'
        }
        const lowwer = word.toLowerCase();
        return lowwer.charAt(0).toUpperCase() + lowwer.slice(1)
    }

    return (
        props.alerts && <div className={`alert d-flex justify-content-center alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
            {cepitalize(props.alerts.type)} : {props.alerts.msg}
        </div>
    )
}

export default Alerts