import React from "react";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { UilTvRetro, MdiGithub } from "../../components/Symbols";



const Nav = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (

      <div className="nav-container">

        <Link to="/">
          HOME
        </Link>
        <Link to="/retroTheme">
          Retro
        </Link>
        <Box sx={{ height: 200, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: -90, right: 16 }}
            icon={<SpeedDialIcon />}
          >
         
              <SpeedDialAction
                icon={<MdiGithub/>}
                tooltipTitle='Home'
                href='/'
              />
              <SpeedDialAction
                icon={<UilTvRetro/>}
                tooltipTitle='RetroTheme'
                href='/retroTheme'
              />
        
          </SpeedDial>
        </Box>
      </div>
    );
  }
  return (
    <div className="nav-container">

    </div>
  );
}

export default Nav;