import React from 'react';
import ConvertCurrency from "./convert-currency";
import { SelectChangeEvent } from '@mui/material/Select';
import {initialValues} from "./utils";


const ConvertCurrencyView = () => {
    const [currency, setCurrency] = React.useState(initialValues);

    const handleBaseCurrency = (event: SelectChangeEvent) => {
        const { value} = event.target;
        setCurrency({
            ...currency,
            [event.target.name]: value,
        });
    };
    return (
        <div>
            <ConvertCurrency currency={currency} handleChange={handleBaseCurrency}/>

        </div>
    );
};

export default ConvertCurrencyView