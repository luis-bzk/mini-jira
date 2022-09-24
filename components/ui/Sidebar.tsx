// react components | hooks
import { useContext } from 'react';
// material ui
import { Box, Divider, Drawer, Typography } from '@mui/material';
// own components
import { UIContext } from '../../context/ui/UIContext';
import { ListItems } from './';

export const Sidebar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: '250px' }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <ListItems />

        <Divider />

        <ListItems />
      </Box>
    </Drawer>
  );
};
