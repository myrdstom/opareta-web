import React, {FC} from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Container } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useStyles } from "./convertCurrencyStyles";

interface ConvertCurrencyProps {
    currency: {
        baseCurrency: string
    };
    handleChange: (e: SelectChangeEvent) => void;
}

const ConvertCurrency: FC<ConvertCurrencyProps> = ({currency, handleChange}) => {
    const {baseCurrency} = currency;
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.container}>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Base</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={baseCurrency}
                        label="Age"
                        onChange={handleChange}
                        name="baseCurrency"
                    >
                        <MenuItem value={'BTC'}>BTC</MenuItem>
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'UGX'}>UGX</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Container>
    );
};

export default ConvertCurrency;