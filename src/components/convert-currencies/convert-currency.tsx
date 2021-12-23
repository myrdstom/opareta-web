import React, { FC, ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Container,
    Grid,
    TextField,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useStyles } from './convertCurrencyStyles';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ConvertCurrencyProps {
    currency: {
        baseCurrency: string;
        compareCurrency: string;
    };
    handleChange: (e: SelectChangeEvent) => void;
    handleCountChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleIncrement: () => void;
    handleDecrement: () => void;
    count: number;
}

const ConvertCurrency: FC<ConvertCurrencyProps> = ({
    currency,
    handleChange,
    handleIncrement,
    handleDecrement,
    handleCountChange,
    count,
}) => {
    const { baseCurrency, compareCurrency } = currency;
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.container}>
            <Box sx={{ minWidth: 120 }}>
                <Grid container spacing={0}>
                    <Grid item xs={4}>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            value={count}
                            fullWidth
                            onChange={handleCountChange}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Box className={classes.count}>
                            <ArrowDropUpIcon onClick={handleIncrement} />
                            <ArrowDropDownIcon onClick={handleDecrement} />
                        </Box>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Base
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={baseCurrency}
                                label="Base"
                                onChange={handleChange}
                                name="baseCurrency"
                            >
                                <MenuItem value={'BTC'}>BTC</MenuItem>
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'UGX'}>UGX</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <Box className={classes.gridSeparator}>
                            <div>
                                <FaLongArrowAltRight />
                            </div>
                            <div>
                                <FaLongArrowAltLeft />
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={compareCurrency}
                                label="Test"
                                onChange={handleChange}
                                name="compareCurrency"
                            >
                                <MenuItem value={'BTC'}>BTC</MenuItem>
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'UGX'}>UGX</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ConvertCurrency;
