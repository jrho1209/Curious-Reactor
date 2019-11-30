import React from 'react'
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CustomStepper from 'components/Stepper/Stepper';
import SurveyCheckBox from 'components/Stepper/SurveyCheckBox';
import CardHeader from 'components/Card/CardHeader';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};
const useStyles = makeStyles(styles);

export default function Survey() {
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>Take a Survey</h4>
                        <p className={classes.cardCategoryWhite}>What are you hoping to get out of your networking time at this meeting? Are you:</p>
                    </CardHeader>
                    <SurveyCheckBox />
                    <CustomStepper />
                </Card>

            </GridItem>
        </GridContainer>
    )
}
