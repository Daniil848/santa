import Steps from "./Pages";
import { createContext, useContext } from "react";
import { GroupContext } from "../contexts/reduser";

const GroupDone = () => {
  const [state, dispatch] = useContext(GroupContext);

  return (
    <div className="group">
      < Steps/>
      <label className="group_label">Ваша группа "{state.group.name}" готова!!!</label>
      
    </div>
  );
};

export default GroupDone;