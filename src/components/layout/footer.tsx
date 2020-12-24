// PLUGINS IMPORTS //
import React from "react"
import { Typography, Link } from "@material-ui/core"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©{" "}
      <Link color={"inherit"} href="www.google.com">
        Your website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  )
}

export default Footer
