import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Stack} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GroupInfoComponent = () => {
  const state = useSelector(state => state.adminReducer);
  const [group , setGroup] = useState();
  const { groupID } = useParams();
  const formAnimationGroupInfo = (state.groupInfo) ? "form--animation1" : "";
  const styles = {
    fontWeight : 500,
    fontSize: 16,
    my : 1,
  }
  useEffect(() => {
    if (groupID) {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:3002/group/${groupID}`);
        const data = await response.json();
        setGroup(data);
      };
      fetchData(); 
    }
  },[groupID]);

  if (state.groupInfo) {
    return (
      <div className={`${formAnimationGroupInfo}`}>
        <Accordion disableGutters sx={{ borderTopRadius : "8px"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
            variant="caption"
            sx = {{ fontWeight : 500, fontSize: 18,}}
            >Группа</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{width : 1}}>
              <Typography
                variant="caption"
                sx = {styles}
              >Название: { groupID ? group.name : state.group.name }</Typography>
              <Typography
                variant="caption"
                sx = {styles}
              >Бюджет: {groupID ? group.date.budget : state.date.budget}₽</Typography>
              <Typography
                variant="caption"
                sx = {styles}
              >Обмен подарками: {groupID ? group.date.exchange : state.date.exchange}</Typography>
            </Stack>
          </AccordionDetails> 
        </Accordion>

        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="caption"
              sx = {{ fontWeight : 500, fontSize: 18}}
            >Ваши данные</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{width : 1}}>
              <Typography
                variant="caption"
                sx = {styles}
              >Имя: {state.user.name}</Typography>
              <Typography
                variant="caption"
                sx = {styles}
              >Почта: {state.user.email}</Typography>
              <Typography
                variant="caption"
                sx = {styles}
              >Пожеланияя к подарку: {state.gift.wiches}</Typography>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
};

export default GroupInfoComponent;