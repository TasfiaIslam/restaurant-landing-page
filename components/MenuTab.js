import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MenuItems } from './MenuItems';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#2b3a41',
  },
}));

export default function MenuTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className="w-64"
      >
        <Tab label="Meat" {...a11yProps(0)} />
        <Tab label="Fish" {...a11yProps(1)} />
        <Tab label="Bakery" {...a11yProps(2)} />
        <Tab label="Drinks" {...a11yProps(3)} />

      </Tabs>
      <TabPanel className="w-1/2" value={value} index={0}>
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MenuItems/>
        <MenuItems/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MenuItems/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MenuItems/>
      </TabPanel>
    </div>
  );
}
