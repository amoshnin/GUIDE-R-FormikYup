// PLUGINS IMPORTS //
import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { useHeaderStyle } from "./header.style"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Header = () => {
  const styles = useHeaderStyle()

  return (
    <AppBar position="absolute" color="default" className={styles.appBar}>
      <Toolbar>
        <Typography>Company name</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
