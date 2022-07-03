import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (prop) => {
        const scrollToElement = (element) => {
                scroller.scrollTo(element,{
                    duration: 150,
                    delay:100,
                    smooth: true,
                    offset: -100
                });
                //prop.onClose(false)
            }
    return (
        <div>
             <Drawer
            anchor="right"
            open={prop.open}
            onClose={()=> prop.onClose(false)}>
                        <List component="nav">
                         <ListItem button onClick={()=>scrollToElement('featured')}>
                                 Event Start in
                         </ListItem>
                         <ListItem button onClick={()=>scrollToElement('venuenfo')}>
                                 Vanue NFO
                         </ListItem>
                         <ListItem button onClick={()=>scrollToElement('highlights')}>
                                 High lights
                         </ListItem>
                         <ListItem button onClick={()=>scrollToElement('pricing')}>
                                 Pricing
                         </ListItem>
                         <ListItem button onClick={()=>scrollToElement('location')}>
                                 Location
                         </ListItem>
                       </List>
                     </Drawer>
        </div>
    );
};

export default SideDrawer;