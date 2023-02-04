import React from 'react';
import searchIcon from '../../assest/images/search.svg'

const CustomersHeader = () => {
    return (
        <div className={'customers__header header-customers'}>
            <div className={'header-customers__body'}>
                <h1 className={'header-customers__title'}>All Customers</h1>
                <div className={'header-customers__text'}>Active Members</div>
            </div>
            <div className={'header-customers__search search'}>
                <form className={'search__form'} action="src/pages#">
                    <div className={'search__image'}>
                        <img src={searchIcon} alt="search Icon"/>
                    </div>
                    <input autoComplete="off" name="form[]" data-error="Ошибка" className={'search__input'}
                           type="text" placeholder={"Search"}/>
                </form>

            </div>
        </div>
    );
};

export default CustomersHeader;