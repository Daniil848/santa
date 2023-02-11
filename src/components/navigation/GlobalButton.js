import { Button } from "@mui/material"

const GlobalButton = (props) => {
  return (
    <Button
      onClick={props.click}
      variant="contained"
      sx={{ boxShadow: 3, width : 1, height: 40,  mt : 1.5, }}
    >OK</Button>
  )
}

export default GlobalButton;