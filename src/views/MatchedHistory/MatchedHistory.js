import React from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CardProfile from "components/Card/CardProfile";
import GridItem from 'components/Grid/GridItem';
import Grid from '@material-ui/core/Grid';
import GridContainer from "components/Grid/GridContainer";
import MatchedProfiles from "components/MatchedProfiles/MatchedProfiles";




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    leftCard: {
        display: 'inline-flex',
    },
    rightCard: {
        display: 'inline-flex',
        // padding: theme.spacing(5),
    }
}));

export default function MatchedHistory() {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.leftCard} >
                <GridItem md={6}>
                    <MatchedProfiles />
                </GridItem>
                {/* <GridItem md={1}>

                </GridItem>
                <GridItem md={5.5}>
                    <CardProfile />
                </GridItem> */}
            </Grid>
            {/* 
            <Grid className={classes.rightCard} xs={12} sm={12} md={5}>
                <CardProfile />
            </Grid> */}
        </div>
    )
}
