import React,{useState} from 'react'
import SideBar from '../SideBar/SideBar'
import './Settings.css'
import { images } from '../../constants'
import AccountPopup from '../AccountPopup/AccountPopup'
function Settings() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='home home-settings'>
      <SideBar />
      <div className="homebody">
        <div className="homebody__header">
          <p className="homebody__header-title">Setting</p>
          <div className="homebody__list">
            <div className="homebody__list-item_ethereum">
              <img src={images.Rectangle287} alt="rectangle" />
              <p className="homebody__list-item_ethereum-text">Ethereum</p>
            </div>
            <div className="homebody__list-item_notify">
              <img
                className="img-bell"
                src={images.NotificationsIcon}
                alt="notify"
              />
              <img
                className="img-alert"
                src={images.Notificationalert}
                alt="notifyalert"
              />
            </div>
            <div className="homebody__list-item_avatar">
              <a>
                <img
                  src={images.ProfilePic}
                  alt="profile"
                  onClick={() => setIsOpen(true)}
                />
              </a>
              <AccountPopup open={isOpen} onClose={() => setIsOpen(false)}>
                <AccountPopup />
              </AccountPopup>
            </div>
          </div>
        </div>
      </div>
      <img src={images.Avata} alt="" className='settings-avata' />
      <p className='settings-text id-name'>0x34...6948</p>
      <p className='settings-text text-name'>Add your username</p>
      <div className='settings-edit-photto'>
      </div>
      <p className='settings-text text-edit'>Edit profile photo</p>
      <div className='settings-personal-info'>
        <p className='settings-text text-account'>Account</p>
        <div className='settings-line line-settings-1'></div>

        <p className='settings-text text-username'>Username</p>
        <p className='settings-text text-username-chill'>Add your username</p>
        <img src={images.Edit} alt="" className='img-edit edit-1' />
        <div className='settings-line line-settings-2'></div>

        <p className='settings-text text-fullname'>Full name</p>
        <p className='settings-text text-fullname-chill'>Add your full name</p>
        <img src={images.Edit} alt="" className='img-edit edit-2' />
        <div className='settings-line line-settings-3'></div>

        <p className='settings-text text-email'>Email address</p>
        <p className='settings-text text-email-chill'>Add your email address</p>
        <img src={images.Edit} alt="" className='img-edit edit-3' />
        <div className='settings-line line-settings-4'></div>

        <p className='settings-text text-wallet'>Wallet address</p>
        <p className='settings-text text-wallet-chill'>0x34...6948</p>
        <div className='settings-change settings-text text-change'>Change</div>

      </div>
      <div className='settings-referrals'>
        <p className='settings-text text-preferences'>Preferences</p>
        <div className='settings-line line-settings-5'></div>

        <p className='settings-text text-network'>Default network</p>
        <p className='settings-text text-ethereum'>Ethereum</p>
        <img src={images.Rectangle287} alt="" className='icon-setting ether'/>
        <img src={images.AVAXIcon} alt="" className='icon-setting avaxi'/>
        <img src={images.BNB} alt="" className='icon-setting bnv'/>
        <img src={images.MATICIcon} alt="" className='icon-setting matici' />
        <div className='settings-line line-settings-6'></div>

        <p className='settings-text text-connected'>Connected bank</p>
        <p className='settings-text text-connect'>Connect your bank</p>
        <div className='settings-change settings-text text-text-connect'>Connect</div>
        <div className='settings-line line-settings-7'></div>

        <p className='settings-text text-transactions'>Transactions</p>
        <div className='settings-change settings-text text-download'>Download</div>
      </div>

    </div>
  )
}

export default Settings