import NavigateOption from "../navigateOption";
import deleteIcon from '../../assets/img/deleteIcon.svg'
import setting from '../../assets/img/Setting.svg'
import createEvent from '../../assets/img/Create event icon.svg'
import externalLink from '../../assets/img/share external links icon.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateNewEventModal from "./creatNewEventModal";
import DeleteEvent from "../groups/groupUserView/groupUserViewLeft/leaveGroup/leaveGroupModal"

const EventAdminOption = () => {
    const navigate = useNavigate()
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [deleteEvent, setDeleteEvent] = useState(false);
    return ( 
        <>
        <div className="p-3">
          <p className="groupName">Manage Group</p>
        
       <NavigateOption url={createEvent} text='Create New Event' onClick={()=>setIsEventModalOpen(true)}/>
       <NavigateOption url={deleteIcon} text='Delete event' onClick={()=> setDeleteEvent(true)}/>
       <NavigateOption url={externalLink} text='Share external links' onClick={()=> navigate('/')}/>
        <NavigateOption url={setting} text='Event Settings' onClick={()=> setIsEventModalOpen(true)}/>
        </div>
        <DeleteEvent open={deleteEvent}
       onCancel={()=>setDeleteEvent(false)}/>
        <CreateNewEventModal
      open={isEventModalOpen}
      onCancel={()=>setIsEventModalOpen(false)}
      />
     
      
      </>
     );
}
 
export default EventAdminOption;