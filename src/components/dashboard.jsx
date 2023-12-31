import * as React from 'react';
import {Routes, Route,useNavigate} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import BarChartIcon from '@mui/icons-material/BarChart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PieChartIcon from '@mui/icons-material/PieChart';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import PropTypes from 'prop-types';
import Display from './Display';
import CBar from './bar';
import CPie from './pie';
import CLine from './line';

const drawerWidth = 240;

 function ResponsiveDrawer(props) {
  const navigate=useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem  disablePadding onClick={()=>navigate("/")}>
            <ListItemButton>
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>
              <ListItemText>Analytics</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>navigate("/cbar")}>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon/>
              </ListItemIcon>
              <ListItemText>Bar Chart</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>navigate("/cpie")}>
            <ListItemButton>
              <ListItemIcon>
                <PieChartIcon/>
              </ListItemIcon>
              <ListItemText>Pie Chart</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding onClick={()=>navigate("/cline")}>
            <ListItemButton>
              <ListItemIcon>
                <MultilineChartIcon/>
              </ListItemIcon>
              <ListItemText>Line Chart</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route exact path='/' element={<Display/>}></Route>
          <Route  path='/cbar' element={<CBar/>}></Route>
          <Route  path='/cpie' element={<CPie/>}></Route>
          <Route  path='/cline' element={<CLine/>}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer