import React from 'react';
import {CONTAINER} from "../utils/constAll";
import CustomersHeader from "../components/CustomersHeader/CustomersHeader";
import CustomersTable from "../components/CustomersTable/CustomersTable";
import Sidebar from "../components/Sidebar/Sidebar";
import CustomersFooter from "../components/CustomersFooter/CustomersFooter";



const AllCustomers = () => {
    return (
        <section className={'customers'}>
            <div className={`customers__${CONTAINER}`}>
                <Sidebar />
                <div className={'customers__page'}>
                    <CustomersHeader/>
                    <CustomersTable />
                    <CustomersFooter />
                </div>
            </div>
        </section>
    );
};

export default AllCustomers;