import { useContext } from 'react';

import { UIContext } from '../../context/ui/UIContext';

// material ui
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

const menuItems: Array<string> = ['inbox', 'starred', 'Send email', 'Drafts'];

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: '250px' }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem button key={menuItem}>
              <ListItemIcon>{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}</ListItemIcon>

              <ListItemText primary={menuItem} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem button key={menuItem}>
              <ListItemIcon>{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}</ListItemIcon>

              <ListItemText primary={menuItem} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
