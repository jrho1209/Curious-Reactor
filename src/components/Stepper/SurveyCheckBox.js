import React from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from "components/Grid/GridItem";
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';




const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    cardMargin: {
        marginTop: "15px",
        marginLeft: "10px"
    },
    fontColor: {
        color: 'black'
    }
}));

export default function SurveyCheckBox() {
    const classes = useStyles();

    const handleChange = (props) => {
        if (props === 'true') {
            console.log("this is true");
        } else {
            console.log("this is false");

        }
    }
    return (
        <div>
            <div className={classes.cardMargin}>
                <GridItem xs={12} sm={12} md={4}>
                    <FormControl component="fieldset" className={classes.checkboxContainer} required>
                        {/* <FormLabel component="legend">What are you hoping to get out of your networking time at this meeting? Are you:</FormLabel> */}
                        <FormGroup aria-label="position" row >
                            <FormControlLabel
                                value="end"
                                control={
                                    <Checkbox
                                        color="primary" onChange={handleChange('hello')} />}
                                label="Showcasing Reasearch"
                                labelPlacement="end"
                            // className={classes.fontColor}

                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Seeking R&D Coolaboration"
                                labelPlacement="end"
                                className={classes.fontColor}
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Seeking or offering Licensable IP"
                                labelPlacement="end"
                                className={classes.fontColor}
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Seeking or offering Investment"
                                labelPlacement="end"
                                className={classes.fontColor}
                            />
                        </FormGroup>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<DoneIcon />}
                    >
                        Begin
                        </Button>

                </GridItem>
            </div>
        </div>
    )
}
