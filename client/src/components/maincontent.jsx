import React from 'react'
import Dashboard from './dashboard'
import Discover_Receipe from './discover_receipe'
import Grocery_List from './grocery_list'
import My_Receipe from './my_receipe'
import Profile from './profile'
import Notification from './notification'
import Help_Support from './help_support'
import CreateMeal from './createmeal'
import Parentmealplan from './parentmealplan'

const Maincontent = ({ selectedItem }) => {
  let contentToRender;

  switch (selectedItem) {
    /* case 'dashboard':
      contentToRender = <Dashboard />;
      break; */
    case 'discover':
      contentToRender =  <Profile />;
      break;
    case 'grocery':
      contentToRender = <Grocery_List />;
      break;
    case 'recipes':
      contentToRender = <My_Receipe />;
      break;
   /*  case 'profile':
      contentToRender = '';
      break;
    case 'Notification':
      contentToRender = <Notification />
      break;
    case 'Help_and_Support':
      contentToRender = <Help_Support />
      break; */
    case 'CreateMeal':
      contentToRender = <Parentmealplan />
      break;
    // Add more cases as needed for other menu items
    default:
      contentToRender = null;
  }

  return (
    <div>
      {contentToRender}
      {console.log(contentToRender)}
      
    </div>
  );
};

export default Maincontent;
