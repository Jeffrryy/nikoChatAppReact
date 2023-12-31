import React, { useContext } from 'react'
import Cam from '../Assets/cam.png'
import Add from '../Assets/add.png'
import More from '../Assets/more.png'
import Messages from './Messages'
import Input from './Input'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chatInfo'>
     
     {data.user != "" ? <span>{data.user?.displayName}</span> : <span>{data.user?.displayName}</span>}
          
       
      <div className='chatIcons'>
        <img src={Cam} alt="" />
        <img src={Add} alt="" />
        <img src={More} alt="" />
      </div>
      </div>
      <Messages/>
      <Input/> 
    </div>
  )
}

export default Chat