import { Button } from "@mui/material"

const GroupInfoButton = () => {
  return (
    <Button
      variant="contained"
      sx={{ boxShadow: 3, width : auto, height: 40,  mt : 1.5, }}
    >Информация о группе</Button>
  );
};

export default GroupInfoButton;