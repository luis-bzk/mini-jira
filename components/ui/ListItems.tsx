import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

const menuItems: Array<string> = ['inbox', 'starred', 'Send email', 'Drafts'];

export const ListItems = () => {
  return (
    <List>
      {menuItems.map((menuItem, index) => (
        <ListItem button key={menuItem}>
          <ListItemIcon>{index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}</ListItemIcon>

          <ListItemText primary={menuItem} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListItems;
