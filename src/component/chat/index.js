import React from 'react'
import { messagesData } from '../../constants/messages'
import './index.css'
import * as Icons from './chatsIcon'
export const Chats = () => {
  return (
    <>

      <div className='options-container'>
        <div className='blue-text'>Edit</div>
        <div>
          <Icons.CameraIcon />
          <Icons.EditIcon />
        </div>
      </div>
      <h1 className='main-title'>
        Chats
      </h1>
      <div className='random-title'>
        <span className='blue-text'>Broadcast Lists</span>
        <span className='blue-text'>New Group</span>

      </div>
      <div className='full-chat-line'></div>
      <div className='chatContainer'>
        <div className='firstSection-archive-container'>
          <Icons.ArchivedIcon />
          <span className='blue-text'>
            4
          </span>
        </div>
        <div className='chat-line-archive'></div>
      </div>
      <div className='chats'>
        {messagesData?.length && messagesData.map(user => (
          <div className='chatContainer'>
            <div className='firstSection-message-container'>
              <img src={user.imageUrl} alt='userImage' className='userImage' />
              <div className='text-time-container'>
                <div className='text-info'>
                  <span className='name-text-info'>
                    {user.name}
                  </span>
                  <span className={`${user.received && user.unReadMesseagesNumber ? 'time-size active-unread-message' : 'time-size time-message-info'} `}>
                    {user.time}
                  </span>

                </div>
                <div className='messageContainer'>
                  <span className='messages-info'>
                    {user.send && <Icons.ReadIcon isRead={user.isRead} />}
                    <span className='message-text-info'>
                      {user.lastMessage}
                    </span>
                  </span>
                  {
                    user.received && user.unReadMesseagesNumber && <span className='chats-tab-notification'>
                      {user.unReadMesseagesNumber}
                    </span>
                  }
                </div>
                <div className='chat-line'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
