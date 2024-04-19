import React, { useState } from 'react';
import IconLogoMonday from '../../../../Components/Icon/IconLogoMonday';
import './header.scss';
import IconNotification from '../../../../Components/Icon/IconNotification';
import { Avatar, Drawer, Modal } from 'antd';
import IconUpdateFeed from '../../../../Components/Icon/IconUpdateFeed';
import IconInviteMember from '../../../../Components/Icon/IconInviteMember';
import IconApp from '../../../../Components/Icon/IconApp';
import IconSearch from '../../../../Components/Icon/IconSearch';
import IconHelp from '../../../../Components/Icon/IconHelp';
const Header = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <header className="header">
        {/* logo  */}
        <div className="header_logo">
          <IconLogoMonday size={25} />
          <b>monday</b>
          <span className="font-light">work management</span>
        </div>
        {/* action  */}
        <div className="header_action">
          <div className="border-r border-gray-300 pr-2">
            {/* notification */}
            <button onClick={showDrawer}>
              <IconNotification />
            </button>
            {/* update feed  */}
            <button onClick={showModal}>
              <IconUpdateFeed />
            </button>
            {/* invite member  */}
            <button>
              <IconInviteMember />
            </button>
            {/* marketplace  */}
            <button>
              <IconApp />
            </button>
          </div>
          {/* search  */}
          <button>
            <IconSearch />
          </button>
          <button>
            <IconHelp />
          </button>
          {/* info user  */}
          <div className="flex items-center bg-gray-100 px-2 pr-8  py-1 relative">
            <img width={20} src="./public/logoMonday.png" alt="" />
            <Avatar className="absolute bg-blue-500 -right-5 w-10 h-10">
              HH
            </Avatar>
          </div>
        </div>
      </header>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Header;
