import React from 'react';
import Cuisine from './cuisine';
import Caloriesmeal from './caloresmeal';
import DietaryPref from './dietaryPref';

const Createmealdashboard2 = ({ selectedItem }) => {
  let contentToRender;

  switch (selectedItem) {
    case 'calories':
      contentToRender = <Caloriesmeal />;
      break;
    case 'cuisine':
      contentToRender = <Cuisine />;
      break;
    case 'dietary':
      contentToRender = <DietaryPref />;
      break;
    default:
      contentToRender = null;
  }

  return (
    <div>{contentToRender}
    
    </div>
  );
}

export default Createmealdashboard2;
