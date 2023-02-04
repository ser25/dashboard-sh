import React from 'react';

const CustomerTableItemName = ({country, phoneNumber, company, customerName, email, status}) => {
    // console.log({country, phoneNumber, company, customerName, email, status})
    let bgClasses = 'button'
    if (status === 'Active'){
        bgClasses+= '_green'
    }else if (status === 'Inactive'){
        bgClasses+= '_red'
    }
    return (
        <div className="customers__item item-customers">
            <div className="item-customers__customers-name width-customers">{customerName}</div>
            <div className="item-customers__company width-customers">{company}</div>
            <div className="item-customers__phone-number width-customers">{phoneNumber}</div>
            <div className="item-customers__email width-customers">{email}</div>
            <div className="item-customers__country width-customers">{country}</div>
            <button className={`item-customers__status button ${bgClasses}`}>{status}</button>
        </div>
    );
};

export default CustomerTableItemName;