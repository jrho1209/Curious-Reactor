// import React from 'react'
// import { makeStyles } from "@material-ui/core/styles";
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";
// import { curiousColor, curiousSilver, curiousCore } from "assets/jss/material-dashboard-react";

// const styles = {
//     surveyTable: {
//         color: curiousColor,
//     },
//     cardCategoryWhite: {
//         color: curiousCore,
//         margin: "0",
//         fontSize: "12px",
//         marginTop: "0",
//         marginBottom: "0"
//     },

// }

// const useStyles = makeStyles(styles);

// export default function SurveyHistory() {
//     const classes = useStyles();

//     return (
//         <div>
//             <GridContainer>
//                 <GridItem xs={12} sm={12} md={12}>
//                     <Card>
//                         <CardHeader color="info" className={classes.surveyTable}>
//                             <h4 className={classes.cardTitleWhite}>Survey History</h4>
//                             <p className={classes.cardCategoryWhite}>
//                                 from last submitted survey
//                             </p>
//                         </CardHeader>
//                         <CardBody>
//                             <Table
//                                 tableHeaderColor="warning"
//                                 tableHead={["Name", "Matches", "Location", "End Date"]}
//                                 tableData={[
//                                     ["Conference 1", "45", "Niger", "Nov 15th"],
//                                     ["Conference 2", "135", "Curaçao", "Nov 15th"],
//                                     ["Conference 3", "127", "Netherlands", "Nov 15th"],
//                                     ["Conference 4", "456", "South Korea", "Nov 15th"]
//                                 ]}
//                             />
//                         </CardBody>
//                     </Card>
//                 </GridItem>
//             </GridContainer>

//         </div>
//     )
// }

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from "components/Table/Table.js";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SurveyHistory() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Survey History tab">
                    <Tab label="Technology" {...a11yProps(0)} />
                    <Tab label="Something1" {...a11yProps(1)} />
                    <Tab label="Something2" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Table
                    tableHeaderColor="warning"
                    tableHead={["Name", "Matches", "Location", "End Date"]}
                    tableData={[
                        ["Conference 1", "45", "Niger", "Nov 15th"],
                        ["Conference 2", "135", "Curaçao", "Nov 15th"],
                        ["Conference 3", "127", "Netherlands", "Nov 15th"],
                        ["Conference 4", "456", "South Korea", "Nov 15th"]
                    ]}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
      </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
        </div>
    );
}