import React from 'react';
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar";
import GridItem from "components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "assets/img/faces/marc.jpg";
import CardBody from "components/Card/CardBody.js";
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { curiousCore, curiousSilver, curiousColor } from "assets/jss/material-dashboard-react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MatchedDialogs from "./MatchedDialogs";
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
    },
    description: {
        fontStyle: 'italic'
    },
    aboutContainer: {
        marginTop: "50px",
        color: "#F1810F"
    },
    userCard: {
        marginBottom: "35px"
    },
    contactInfo: {
        marginTop: "30px",
        color: curiousSilver,
        // color: curiousCore,
        fontWeight: "bold",
        // display: 'inline-block',
        textAlign: "left"
    },
    contactDescription: {
        marginTop: "8px",
        textAlign: "left",
        display: "flex",
        lineHeight: "28px"
    },
    contactOrganization: {
        display: 'flex',
        marginTop: "5px",
        textAlign: "left",
        lineHeight: "28px"

    },
    categoryName: {
        color: curiousColor,
        fontWeight: "bold",
        // display: 'inline-block',
        textAlign: "left"
    },
    matchedInfo: {
        textAlign: "left",
        marginBottom: "30px"
    },
    userFirstname: {
        fontWeight: "bold"
    },
    matchedDescription: {
        fontStyle: 'italic',

    }
    // contactPhone: {
    //   marginTop: "15px",
    //   textAlign: "left"
    // },
    // contactEmail: {
    //   marginTop: "15px",
    //   textAlign: "left"
    // },

};
const useStyles = makeStyles(styles);

export default function MatchedProfiles() {
    const classes = useStyles();
    return (
        <div>
            <Card profile>
                {/* Todo: automatically import picture */}
                <CardAvatar profile>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={avatar} alt="..." />
                    </a>
                </CardAvatar>
                <CardBody profile className={classes.userCard}>
                    <h6 className={classes.cardCategory}>Software developer</h6>
                    <h4 className={classes.cardTitle}>James Rho</h4>
                    <p className={classes.description}>
                        I{"'"}m interested in something something something something something something something something something somethingsomething something something
             </p>
                    <div className={classes.contactInfo}>
                        Category: <span className={classes.categoryName}>Technology</span>
                    </div>
                    <div className={classes.matchedInfo}>
                        <span className={classes.userFirstname}>James </span>is <span className={classes.userFirstname}> Seeking</span> <span className={classes.matchedDescription}> "I am searching for a better in-vivo imaging technology to use it in the cancer Immunotherapy mouse models"</span>
                    </div>
                    <div>
                        <MatchedDialogs />
                    </div>
                </CardBody>

            </Card>
        </div>
    )
}
