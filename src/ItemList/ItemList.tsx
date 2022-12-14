import React from 'react';
import {Box, Grid, List, ListItem} from "@mui/material";
import {Item} from "../Item/Item";
import mockList from '../mock.json';

export const ItemList = () => {
    return (
        <Box>
            <List>
                <Grid container justifyContent={'center'}>
                    {mockList.map((item, key) =>
                        <Grid item>
                            <ListItem key={key} disablePadding>
                                    <Item {...item}/>
                            </ListItem>
                        </Grid>
                    )}
                </Grid>
            </List>
        </Box>
    )
}