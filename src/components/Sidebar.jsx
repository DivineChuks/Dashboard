import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Divider, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Logo from "../assets/Logo.png"
import footerImage from "../assets/footerImage.png"
import "./sidebar.css"




const Item = ({ title, icon }) => {
  return (
    <MenuItem
      style={{
        color: "#fcfcfc",
        margin: "7px 0",
        fontSize: "16px"
      }}
      icon={icon}
      className="sidebar"
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
          background: '#FCFCFC',
        "& .pro-sidebar-inner": {
          background: `#fff !important`,
          borderRight: "1px solid #EFEFEF !important",
          height: '100vh !important',
          position: 'fixed !important',
          width: 'auto',
          top: '0 !important',
          fontFamily: 'Gordita !important'

        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 0px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#273066 !important",
          backgroundColor: "#EFEFEF"
        },
        "& .pro-menu-item": {
          color: "#707070 !important",
        },
        "& .pro-menu-item.active": {
          color: "#000 !important",
        },
      }}
    >
       <ProSidebar collapsed={isCollapsed} className="sidebar">
          <Box>
            <Menu iconShape="square" sx={{ fontFamily: 'Gordita !important'}}>
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: "#fcfcfc",
                  fontFamily: 'Gordita !important'
                }}
              >
                {!isCollapsed && (
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <img src={Logo} alt="site logo" style={{width: '170px'}} />
                  </Box>
                )}
              </MenuItem>
          
              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                />
          
              <SubMenu title="Components" icon={<HomeOutlinedIcon />} style={{fontSize: '18px'}}>
                <MenuItem>Create Shipment</MenuItem>
                <MenuItem>View All</MenuItem>
              </SubMenu>
          
                <Item
                  title="Customer"
                  to="/team"
                  icon={<PeopleOutlinedIcon />}
                />
          
              <SubMenu title="Rider" icon={<HomeOutlinedIcon />} style={{fontSize: '18px', fontFamily:'Gordita !important'}}>
                <MenuItem>Create Shipment</MenuItem>
                <MenuItem>View All</MenuItem>
              </SubMenu>
          
              <SubMenu title="Fleets" icon={<HomeOutlinedIcon />} style={{fontSize: '18px'}}>
                <MenuItem>Create Shipment</MenuItem>
                <MenuItem>View All</MenuItem>
              </SubMenu>
          
              <Item
                title="Web Design"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
              />
          
              <Item
                title="Analytics"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
              />
          
              <Item
                title="Notification"
                to="/form"
                icon={<PersonOutlinedIcon />}
                sx={{fontFamily:'Gordita !important'}}
              />
          
              <SubMenu title="Settings" icon={<HomeOutlinedIcon />} style={{fontSize: '18px'}}>
                <MenuItem>Create Shipment</MenuItem>
                <MenuItem>View All</MenuItem>
              </SubMenu>
          
              </Box>
            </Menu>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" sx={{padding: "20px 30px 30px 30px", marginLeft: "15px"}} alignItems="center">
            <img src={footerImage} alt="footer" style={{width: "30px", height: "30px"}}/>
            <Typography variant="caption" >Oguelegba Kitchen</Typography>
            <MoreVertIcon />
          </Box>
          </ProSidebar>
  
    </Box>
  );
};

export default Sidebar;

