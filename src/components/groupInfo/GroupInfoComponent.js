import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography, Stack } from "@mui/material";
import {
  doc,
  getDoc,
} from 'firebase/firestore';
import db from '../../firebase';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GroupInfoComponent = () => {
  const state = useSelector(state => state.santa);
  const [group , setGroup] = useState();
  const { groupID } = useParams();
  const formAnimationGroupInfo = (state.groupInfo) ? "form--animation1" : "";
  const styles = {
    fontWeight : 500,
    fontSize: 16,
    my : 1,
  }
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'group', groupID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setGroup(docSnap.data())
      } else {
        return null
      }
    };
    if(groupID) {
      fetchData();
    }
  },[groupID]);

  if (state.groupInfo) {
    return (
      <div className={`${formAnimationGroupInfo}`}>
        <Accordion disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="caption"
              sx = {{ fontWeight : 500, fontSize: 18,}}
            >Группа</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack sx={{width : 1}}>
              {(state.group.name || group) && <Typography
                variant="caption"
                sx = {styles}
              >Название: { groupID ? group.name : state.group.name }</Typography>}
              {(state.date.budget || group) && <Typography
                variant="caption"
                sx = {styles}
              >Бюджет: {groupID ? group.date.budget : state.date.budget}₽</Typography>}
              {(state.date.exchange || group)  && <Typography
                variant="caption"
                sx = {styles}
              >Обмен подарками: {groupID ? group.date.exchange : state.date.exchange}</Typography>}
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
              {state.user.name && <Typography
                variant="caption"
                sx = {styles}
              >Имя: {state.user.name}</Typography>}
              {state.user.email && <Typography
                variant="caption"
                sx = {styles}
              >Почта: {state.user.email}</Typography>}
              {state.gift.age && <Typography
                variant="caption"
                sx = {styles}
              >Возраст: {state.gift.age}</Typography>}
              {state.gift.age && <Typography
                variant="caption"
                sx = {styles}
              >Пол: {state.gift.gender}</Typography>}
              {state.gift.wishes && <Typography
                variant="caption"
                sx = {styles}
              >Пожеланияя к подарку: {state.gift.wishes}</Typography>}
            </Stack>
          </AccordionDetails>
        </Accordion>
        
      </div>
    );
  };
};

export default GroupInfoComponent;