import whatBrings from './../../assets/img/what-brings.avif';
import logoMini from './../../assets/img/logoMiniMonday.png';
import LayoutRadio from '../../layout/LayoutRadio/LayoutRadio';
import { useState } from 'react';
const SurveyQuestion = () => {
  const [whatBring, setWhatBring] = useState('');
  let contentWhatBrings = {
    title: 'Hey there, what brings you here today?',
    items: [
      {
        value: 'Work',
        content: 'Work',
      },
      {
        value: 'Personal',
        content: 'Personal',
      },
      {
        value: 'School',
        content: 'School',
      },
      {
        value: 'Nonprofits',
        content: 'Nonprofits',
      },
    ],
  };
  // console.log(whatBring);
  const handleWhatBring = event => {
    setWhatBring(event.target.value);
  };

  const renderCurrentRadio = () => {
    let items = [];
    switch (whatBring) {
      case 'Work':
        items = [
          {
            content: 'Business owner',
            value: 'Business owner',
          },
          {
            content: 'Team leader',
            value: 'Team leader',
          },
          {
            content: 'Team member',
            value: 'Team member',
          },
          {
            content: 'Freelancer',
            value: 'Freelancer',
          },
          {
            content: 'Director',
            value: 'Director',
          },
          {
            content: 'C-Level',
            value: 'C-Level',
          },
          {
            content: 'VP',
            value: 'VP',
          },
        ];
        break;
      case 'School':
        items = [
          {
            content: 'Undergraduate student',
            value: 'Undergraduate student',
          },
          {
            content: 'Graduate student',
            value: 'Graduate student',
          },
          {
            content: 'Faculty member',
            value: 'Faculty member',
          },
          {
            content: 'Other',
            value: 'Other',
          },
        ];
        break;
      case 'Nonprofits':
        items = [
          {
            content: 'Board member',
            value: 'Board member',
          },
          {
            content: 'Executive',
            value: 'Executive',
          },
          {
            content: 'Employee',
            value: 'Employee',
          },
          {
            content: 'Volunteer',
            value: 'Volunteer',
          },
          {
            content: 'IT staff',
            value: 'IT staff',
          },
          {
            content: 'Other',
            value: 'Other',
          },
        ];
        break;
      default:
        return;
    }
    return (
      <LayoutRadio
        title="What best describes your current role?"
        items={items}
      />
    );
  };

  return (
    <div className="h-screen flex">
      {/* content  */}
      <div className="survey_content w-7/12 px-32 py-16">
        <form className="flex flex-col h-full">
          {/* logo  */}
          <div className="flex-1">
            <img className="h-6" src={logoMini} alt="" />
          </div>
          {/* check box  */}
          <div className="surevey_radio">
            <LayoutRadio
              title={contentWhatBrings.title}
              items={contentWhatBrings.items}
              onChange={handleWhatBring}
            />
            {whatBring && renderCurrentRadio()}
          </div>
          <div className="action_redirect text-right">
            <button>Continue</button>
          </div>
        </form>
      </div>
      {/* img  */}
      <div className="survey_img w-5/12">
        <img className="w-full h-full" src={whatBrings} alt="" />
      </div>
    </div>
  );
};

export default SurveyQuestion;
