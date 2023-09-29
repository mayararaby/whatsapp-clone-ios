import React from 'react'
import * as Icons from './Icons'
import me from '../../assetes/users/me.jpg'
import './index.css'
import { settingsUser, settingsChat, generalSettings, optionalSettings } from '../../constants/messages'
import { SeeAllIcon } from '../groups/GroupsIcons'
export const Settings = () => {
  return (
    <>
      <div className='main-edit'>

        <div className='padding-inline'>
          <h1 className='main-group-title'>
            Settings
          </h1>
        </div>

        <div className='mySettings'>
          <div className='settings-info-container-top'>
            <div className='settings-info-container-top-first-section'>
                <img src={me} className='userImage' alt='useImage' />
              <span className='settings-me'>
                  <span className='myStatus-header'>
                    Zakria El-dardery
                  </span>
                  <span className='subStatusAdd'>
                    Hey there ! iam using whatsapp
                  </span>
              
              </span>
            </div>
            <span className='add-new-story-icons-background'>
              <Icons.QrCode />
            </span>
          </div>
          <div className='chat-line'></div>
          {
            settingsUser.length && settingsUser.map(setting => (

              <div className='settings-container settings-container-border'>
                <div className='settings-info-container'>

                  <span className='settingIcon' style={{ backgroundColor: `${setting.backgroundColor}` }}><setting.icon /></span>
                  <span className='setting-text'>

                    {setting.name}
                  </span>

                </div>
                <SeeAllIcon />
              </div>
            ))
          }
        </div>

        <div className='mySettings'>
          {
            settingsChat.length && settingsChat.map((setting, index) => (
              <>
                <div className={`${index === 0 ? "settings-container" : "settings-container settings-container-border"}`}>
                  <div className='settings-info-container'>

                    <span className='settingIcon' style={{ backgroundColor: `${setting.backgroundColor}` }}><setting.icon /></span>
                    <span className='setting-text'>

                      {setting.name}
                    </span>

                  </div>
                  <SeeAllIcon />
                </div>
              </>
            ))
          }
        </div>


        <div className='mySettings'>
          {
            generalSettings.length && generalSettings.map((setting, index) => (
              <>
                <div className={`${index === 0 ? "settings-container" : "settings-container settings-container-border"}`}>
                  <div className='settings-info-container'>

                    <span className='settingIcon' style={{ backgroundColor: `${setting.backgroundColor}` }}><setting.icon /></span>
                    <span className='setting-text'>

                      {setting.name}
                    </span>

                  </div>
                  <SeeAllIcon />
                </div>
              </>
            ))
          }
        </div>


        <div className='mySettings'>
          {
            optionalSettings.length && optionalSettings.map((setting, index) => (
              <>
                <div className={`${index === 0 ? "settings-container" : "settings-container settings-container-border"}`}>
                  <div className='settings-info-container'>

                    <span className='settingIcon' style={{ backgroundColor: `${setting.backgroundColor}` }}><setting.icon /></span>
                    <span className='setting-text'>

                      {setting.name}
                    </span>

                  </div>
                  <SeeAllIcon />
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}
