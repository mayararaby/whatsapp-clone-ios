import logo from './logo.svg';
import './App.css';
import * as Icons from './assetes/footerIcons'
import React, { useState } from 'react';
import { tabsTypes } from './constants/tabs';
function App() {
  const [ActiveComponent, setActiveComponent] = useState('Chats')
  return (
    <>
      <div>
        <div className='mainpage'>
          {React.createElement(tabsTypes[ActiveComponent], {})}
        </div>
        <div className='mainFooter'>
          <div className='footerGroup' onClick={() => { setActiveComponent('Story') }}>
            <Icons.StatusSvg isActive={ActiveComponent==='Story'} />
            <div className="footerIconsNames" style={{color:ActiveComponent==='Story'&&"#0878F6"}}>
              Updates
            </div>
          </div>
          <div className='footerGroup' onClick={() => { setActiveComponent('Calls') }}>
            <Icons.CallsSvg  isActive={ActiveComponent==='Calls'} />
            <div className="footerIconsNames" style={{color:ActiveComponent==='Calls'&&"#0878F6"}}>Calls</div>

          </div>
          <div className='footerGroup' onClick={() => { setActiveComponent('Groups') }}>
            <Icons.GroupSvg  isActive={ActiveComponent==='Groups'} />
            <div className="footerIconsNames" style={{color:ActiveComponent==='Groups'&&"#0878F6"}}>Groups</div>

          </div>
          <div className='footerGroup' onClick={() => { setActiveComponent('Chats') }}>
            <Icons.ChatsSvg isActive={ActiveComponent==='Chats'} />
            <div className="footerIconsNames" style={{color:ActiveComponent==='Chats'&&"#0878F6"}}>Chats</div>

          </div>
          <div className='footerGroup' onClick={() => { setActiveComponent('Settings') }}>
            <Icons.SettingsSvg  isActive={ActiveComponent==='Settings'} />
            <div className="footerIconsNames" style={{color:ActiveComponent==='Settings'&&"#0878F6"}}> Settings</div>

          </div>

        </div>

      </div>
    </>
  );
}

export default App;
