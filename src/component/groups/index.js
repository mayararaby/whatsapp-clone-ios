import React from 'react'
import { NotWorking } from '../NotWorking/NotWorking'
import { AddStoryIcon } from '../story/storyIcons'
import { Communities } from '../../constants/messages'
import * as Icons from './GroupsIcons'
import './group.css'
export const Groups = () => {
  return (
    <>
      <div className='main-community'>
        <div className='padding-inline'>
          <h1 className='main-group-title'>
            Communities
          </h1>
        </div>
        <div className='myGroup'>
          <div className='status-info-container'>
            <div className='user-add-story'>
              <span className='communityContainer'>
                <Icons.GroupIcon />
              </span>
              <span className='add-icon'>

                <AddStoryIcon className={"add-icon-plus"} />
              </span>
            </div>
            <div className='myStatus-header margin-inline-group'>
              New Community
            </div>

          </div>
        </div>
        <div className='user-community'>

          {
            Communities.length && Communities.map((community, index) => (
              <>
                <div className='user-story user-story-padding '>

                  <div className=''>
                    {
                      community.imageUrl ? <img src={community.imageUrl} alt='userImage' className='userImage' /> :
                        <span className='communityContainer community-container-user'>
                          <Icons.GroupIcon />
                        </span>
                    }
                  </div>
                  <div className='status-info-container-user'>
                    <div className='fullyWidth'>
                      <div className='myStatus-header'>
                        {community.name}
                      </div>
                    </div>
                  </div>
                  <div className='chat-line fullyWidth'></div>
                </div>
                {
                  index === Communities.length - 1 && <>

                    <div className='see-all-communities-container'>
                      <div className='see-all-communities'>
                        See All
                      </div>
                      <div>
                        <Icons.SeeAllIcon />
                      </div>
                    </div>
                  </>
                }
              </>
            ))
          }
        </div>

      </div>
    </>
  )
}
