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
import { curiousCore, curiousSilver } from "assets/jss/material-dashboard-react";

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
    textAlign: "left",
    color: curiousSilver,
    // color: curiousCore,
    fontWeight: "bold"
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

export default function CardProfile() {
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
            Contact Info
          </div>
          <div className={classes.contactOrganization}>
            <BusinessIcon /> Organization: Kaiser Permanate
          </div>
          {/* <div className={classes.contactDescription}>
            <PhoneIcon /> Phone: (123) 456 7890
          </div> */}
          <div className={classes.contactDescription}>
            <MailOutlineIcon /> Email: jrho1209@naver.com
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
