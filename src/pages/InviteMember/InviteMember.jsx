import inviteMemberImg from "./../../assets/img/Invite-member.avif";
import miniLogoImg from "./../../assets/img/logoMiniMonday.png";
import { Space, Select, Input } from "antd";
const InviteMember = () => {
  const options = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "member",
      label: "Member",
    },
  ];
  return (
    <div className="h-screen flex">
      {/* content  */}
      <div className="invite_content w-7/12 px-32 py-16">
        <div className="flex flex-col w-3/4 h-full">
          {/* logo  */}
          <div className="content_logo flex-1">
            <img className="h-6" src={miniLogoImg} alt="" />
          </div>
          {/* field  */}
          <div className="content_field">
            <h1 className="text-2xl mb-5">Who else is on your team?</h1>
            <Space.Compact className="w-full">
              <Input className="px-3 h-[38px]" placeholder="Add email here" />
              <Select
                defaultValue="admin"
                defaultOpen={true}
                className="h-[38px]"
                options={options}
              />
            </Space.Compact>
          </div>
          {/* action  */}
          <div className="content_action flex justify-between">
            <button>Remind me later</button>
            <button>Invite your team</button>
          </div>
        </div>
      </div>
      {/* img  */}
      <div className="invite_img w-5/12">
        <img className="w-full h-full" src={inviteMemberImg} alt="" />
      </div>
    </div>
  );
};

export default InviteMember;
