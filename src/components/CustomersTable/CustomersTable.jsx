import React from 'react';
import {users} from "../../utils/constAll";
import {names} from "../../utils/constAll";
import CustomerTableItemName from "./CustomersTableItemName";

const CustomersTable = () => {

    return (
        <div className="customers__body">
            <div className="customers__item item-customers item-customers_name">
                {users.map(({label, name}, index) =>
                    <div key={index} className={`item-customers__${name} width-customers`}>{label}</div>
                )}
            </div>
            {names.map((name, index) =>
                <CustomerTableItemName
                    key={index}
                    country={name.country}
                    phoneNumber={name.phoneNumber}
                    company={name.company}
                    customerName={name.customerName}
                    email={name.email}
                    status={name.status}

                />
            )}


        </div>

    );
};

export default CustomersTable;