import './App.css';
import * as Icons from './assetes/footerIcons'
import React, { useState } from 'react';
import { tabsTypes } from './constants/tabs';
import { FooterMainComponent } from './component/mainIcon/Index';
function App() {
  const [ActiveComponent, setActiveComponent] = useState('Chats')
  const iconsComponents = [
    {
      reactComponent: Icons.StatusSvg,
      title: 'Story',
      news: true
    },
    {
      reactComponent: Icons.GroupSvg,
      title: 'Groups',
      notification: 1
    },
    {
      reactComponent: Icons.CallsSvg,
      title: 'Calls',
      notification: 2
    },
    {
      reactComponent: Icons.ChatsSvg,
      title: 'Chats',
      notification: 12
    },
    {
      reactComponent: Icons.SettingsSvg,
      title: 'Settings',
      notification: 1
    }
  ]

  return (
    <>
      <div className='page'>
        <div className='mainPage'>
          {React.createElement(tabsTypes[ActiveComponent], {})}
        </div>
        <div className='mainFooter'>
          {
            iconsComponents && iconsComponents.length && iconsComponents.map(component => (
              <FooterMainComponent
                setActiveComponent={setActiveComponent}
                currentComponent={component.title}
                ActiveComponent={ActiveComponent}
                IconComponent={component.reactComponent}
                notification={component.notification}
                news={component.news}
              />))
          }
        </div>

      </div>
    </>
  );
}

export default App;
