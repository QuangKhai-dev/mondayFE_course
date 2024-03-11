import { useState } from "react";
import InputDropdown from "../../Components/Input/InputDropdown";
import inviteMemberImg from "./../../assets/img/Invite-member.avif";
import miniLogoImg from "./../../assets/img/logoMiniMonday.png";

const InviteMember = () => {
  const [arrInputInvite, setArrInputInvite] = useState(["admin", "admin"]);
  const options = [
    {
      value: "admin",
      label: "Admin",
      desc: "Can invite & manage new users",
    },
    {
      value: "member",
      label: "Member",
      desc: "Can add and edit content",
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
            {arrInputInvite.map((item, index) => {
              return (
                <InputDropdown
                  key={index}
                  options={options}
                  placeholder="Add email here"
                  defaultValue={item}
                />
              );
            })}
            <button
              onClick={() => {
                const newArrInput = [...arrInputInvite, "admin"];
                setArrInputInvite(newArrInput);
              }}
              className="py-2 px-4 hover:bg-gray-200 rounded"
            >
              Add another
            </button>
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
