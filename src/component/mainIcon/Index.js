import React from 'react'

export const FooterMainComponent = (props) => {
  const { setActiveComponent, currentComponent, ActiveComponent, IconComponent, notification , news } = props
  return (
    <div className='footerGroup' onClick={() => { setActiveComponent(currentComponent) }}>
      <div className='iconsGroup'>

        <IconComponent isActive={ActiveComponent === currentComponent} />
        {notification&& <span className='notification'>
          {notification}
        </span>}
        {news&& <span className='news'>
        </span>}
      </div>

      <div className="footerIconsNames" style={{ color: ActiveComponent === currentComponent && "#0878F6" }}>{currentComponent}</div>
    </div>
  )
}
