import React, { useEffect, ChangeEvent } from 'react';
import ConvertCurrency from './convert-currency';
import { SelectChangeEvent } from '@mui/material/Select';
import { initialValues } from './utils';
import { convertCurrency } from '../../api/api';

const ConvertCurrencyView = () => {
    const [currency, setCurrency] = React.useState(initialValues);
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        const { baseCurrency, compareCurrency } = currency;
        if (count !== 0 && baseCurrency !== '' && compareCurrency !== '') {
            convertCurrency(count, baseCurrency, compareCurrency);
        }
    }, [currency, count]);

    const handleBaseCurrency = (event: SelectChangeEvent) => {
        const { value } = event.target;
        setCurrency({
            ...currency,
            [event.target.name]: value,
        });
    };

    const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const convertedValue = parseInt(value);
        if (isNaN(convertedValue)) {
            console.log('please provide a number');
        } else {
            setCount(convertedValue);
        }
    };

    const handleIncrement = () => {
        setCount(Math.round((count + 0.1) * 100) / 100);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(Math.round((count - 0.1) * 100) / 100);
        }
    };
    return (
        <div>
            <ConvertCurrency
                currency={currency}
                count={count}
                handleChange={handleBaseCurrency}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleCountChange={handleCountChange}
            />
        </div>
    );
};

export default ConvertCurrencyView;
