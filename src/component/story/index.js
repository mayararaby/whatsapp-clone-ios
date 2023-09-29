import React from 'react'
import * as StoryIcon from './storyIcons'
import './index.css'
import me from '../../assetes/users/me.jpg'
import { messagesData } from '../../constants/messages'
export const Story = () => {
  return (
    <div className='main-edit'>
      <div className='story-options-icons'>
        <StoryIcon.AddIcon />
        <StoryIcon.MenuIcon />
      </div>
      <div className='padding-inline'>
        <h1>
          Updates
        </h1>
        <h3>
          Status
        </h3>
      </div>
      <div className='myStory'>
        <div className='status-info-container'>
          <div className='user-add-story'>
            <img src={me} className='userImage' alt='useImage' />
            <StoryIcon.AddStoryIcon className={"add-new-story"} />
          </div>
          <div>
            <div className='myStatus-header'>
              My Status
            </div>
            <div className='subStatusAdd'>
              Add to my status
            </div>
          </div>
        </div>

        <div>
          <span className='add-new-story-icons-background'>

            <StoryIcon.FilledCamera />
          </span>
          <span className='add-new-story-icons-background'>

            <StoryIcon.PenIcon />
          </span>
        </div>
      </div>

      <div className='recent-update-title'>
        RECENT UPDATES
      </div>
      <div>

        {
          messagesData?.length && messagesData.map(user => user.hasStory && (
            <div className=''>
              <div className='user-story user-story-padding '>

                <div className=''>
                  <img src={user.imageUrl} alt='userImage' className='userImage story-number' />
                </div>
                <div className='status-info-container-user'>
                  <div className='fullyWidth'>
                    <div className='myStatus-header'>
                      {user.name}
                    </div>
                    <div className='subStatusAdd'>
                      {user.time}
                    </div>
                  </div>
                  <div className='chat-line fullyWidth'></div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
