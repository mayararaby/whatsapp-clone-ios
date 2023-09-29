import React from 'react'
import './index.css'
import * as Icons from './Icons'
import { calling } from '../../constants/messages'
export const Calls = () => {
  return (
    <>
      <div className='main-edit'>

        <div className='padding-inline'>
          <h1 className='main-group-title'>
            Calls
          </h1>
        </div>

        <div className='mySettings'>
          <div className='settings-info-container-top'>
            <div className='settings-info-container-top-first-section'>
              <span className='add-new-story-icons-background'>
                <Icons.Link />
              </span>
              <span className='settings-me'>
                <span className='Calls-header'>
                  Create Call Link
                </span>
                <span className='subStatusAdd'>
                  Share a link for your WhatsApp call
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className='padding-inline'>
          <h3 className='main-group-title'>
            Recent
          </h3>
        </div>
        <div className='calling-container'>

          {
            calling.length && calling.map((call, index) => (

              <div className='chatContainer '>
                <div className='firstSection-message-container'>
                  <img src={call.imageUrl} alt='userImage' className='userImage' />
                  <div className='text-time-container'>
                    <div className='text-info'>
                      <span className={`${call.isMissed ? 'missedCallName name-text-info' : "name-text-info"}`}>
                        {`${call.name} ${call.callingNumber ? `(${call.callingNumber})` : ""}`}
                      </span>
                    </div>
                    <div className='messageContainer'>
                      <span className='calls-type'>
                        {call.callType === 'call' && <Icons.CallIcon />}
                        {call.callType === 'video' && <Icons.VideoIcon />}

                        <span className='message-text-info'>
                          {call.type}
                        </span>
                      </span>
                      {
                        <span className='calls-information-time'>
                          <span className='time-information-margin'>
                            {call.time}
                          </span>
                          <span>
                            <Icons.Information />
                          </span>
                        </span>
                      }
                    </div>
                    {
                      index !== calling.length - 1 && <div className='chat-line'></div>
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>



      </div>
    </>)
}
