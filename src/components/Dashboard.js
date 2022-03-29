import * as React from "react";
import { connect } from "../store/walletActions";
import Account from "./account/";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Dashboard(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#102214",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: "white",
        border: "solid thin #70d388",
        borderRadius: "10px",
    }));
    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: "1000px", mx: "auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <Item>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        SAFUU Price
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        $88,586,328
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Market Cap
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        $88,586,328
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Circulating Supply
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        515,118.1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Backed Liquidity
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        100%
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Next Rebase
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        00:10:10
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Total Supply
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        606,573.96
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                SAFUU Price
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                $171.33
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                Market Value of Treasury Asset
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                $3,330,505
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                Pool Value
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                $16,675,317
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                SAFUU Insurance Fund Value
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                $2,114,478
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                # Value of FirePit
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                91,455.86 SAFUU
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                $ Value of FirePit
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                $15,727,926
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Item>
                            <Typography variant="h6" component="div" gutterBottom>
                                % FirePit : Supply
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                15.07%
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
