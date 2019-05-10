import React from 'react'
import styled from 'styled-components'
import Dropdown from '@helpscout/hsds-react/components/Dropdown/DropdownV2'
import Icon from '@helpscout/hsds-react/components/Icon'
import '@helpscout/hsds-react/adapters/app'

const Wrapper = styled.div`

  background: #e3e8eb;
  padding: 20px 20px 50px;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .c-profile__card{
      position: relative;
      background:#FFF;
      -webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1);
      box-shadow:0 1px 3px 0 rgba(0,0,0,.1);
      -webkit-box-sizing:border-box;
      box-sizing:border-box;
      border-radius:3px;
      margin-bottom:-25px;
      padding:35px 20px 16px 20px;
      width:100%;
  }
  .c-profile__card a{
      color:#2A3B47
  }
  .c-profile__name{
      color:#2a3b47;
      font-size:16px;
      font-weight:500;
      line-height:21px
  }
  .c-profile__more a{
      color:#93a1af;
      font-size:13px;
      line-height:19px
  }
  .c-profile__more a i.caret{
      border-color:#93a1af;
      right:-5px
  }
  .c-profile__details:nth-of-type(1) a{
      color:#07C;
      font-size:13px;
      font-weight:500;
      line-height:20px;
      width:93%
  }
  .c-profile__details{
      color:#93a1af
  }
  .c-profile__details a{
      color:#93a1af;
      font-size:13px;
      line-height:19px;
      margin-bottom:0;
      word-wrap:break-word
  }
  .c-profile-signature{
      margin-top:10px
  }
  .c-profile-signature__item{
      color:#93a1af;
      font-size:13px;
      line-height:18px;
      word-wrap:break-word
  }
  .c-profile-section:last-child{
      width:95%
  }
  .c-profile__background{
      color:#93a1af;
      margin-top:10px
  }

  .c-avatar {
    background:#fff;
    border:2px solid #fff;
    border-radius:50%;
    -webkit-box-shadow:0 4px 6px rgba(147,161,175,.5);
    box-shadow:0 4px 6px rgba(147,161,175,.5);
    height:68px;
    margin:0 0 -25px 13px;
    width:68px;
    z-index:2;
    position: relative;
    overflow: hidden;
  }

  .c-avatar__image {
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    height: auto;
    left: 50%;
    margin: auto;
    max-width: 200%;
    max-height: 100%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    width: auto;

    color: #a5b2bd;
    line-height: 1.4;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

const Profile = () => {
  return (
    <div id="sidebarProfile">
      <Wrapper>
        <div className="profile-customer no-social">
          <div className="header">
            <div className="avatar c-avatar">
              <a title="Edit Profile" href="#" className="profile-edit">
                <img src="https://d33v4339jhl8k0.cloudfront.net/customer-avatar/08.png" alt="Disqus" className="js-avatar c-avatar__image" />
              </a>
            </div>

            <div className="c-profile__card">
              <div className="c-profile-section">
                <a title="Edit Profile" href="#" className="profile-edit">
                <div className="c-profile__name">Disqus Blog</div>
                </a>
              </div>

              <div className="c-profile-section">
                <div>
                  <div className="c-profile__details"><a href="#" title="Email customer">newsletter@disqus.com</a></div>
                </div>
              </div>

              <div style={{
                    position: 'absolute',
                    right: 15,
                    bottom: 10,
                  }}>


              <Dropdown
                id="my-dropdown"
                items={[
                  { id: '1', label: 'Edit Profile', value: 'val-1' },
                  { id: '2', label: 'Change Customer', value: 'val-2' }
                ]}
                renderTrigger={
                  <Icon name="cog" size="24" muted />
                }
              />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Profile
