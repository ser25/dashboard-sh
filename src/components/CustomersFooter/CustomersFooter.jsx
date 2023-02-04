import React from 'react';

const CustomersFooter = () => {
    return (
        <div className={'customers__footer footer-customers'}>
            <div className={'footer-customers__text'}>
                Showing data 1 to 8 of 256K entries
            </div>
            <div className={'footer-customers__navigation navigation'}>
                <div className={'navigation__list'}>
                    <div className={'navigation__item'}>{'<'}</div>
                    <div className={'navigation__item active-nav'}>1</div>
                    <div className={'navigation__item'}>2</div>
                    <div className={'navigation__item'}>3</div>
                    <div className={'navigation__item'}>4</div>
                    <div className={'navigation__item'}>...</div>
                    <div className={'navigation__item'}>40</div>
                    <div className={'navigation__item'}>{'>'}</div>

                </div>
            </div>
        </div>
    );
};

export default CustomersFooter;