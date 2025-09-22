import React, { use, useState } from 'react';
import TreeCatagory from './TreeCatagory';

const TreeCatagories = ({ plantsCatagory }) => {
  let catagoryPlantUse = use(plantsCatagory);
  let catagoryPlant = catagoryPlantUse.categories;
  const [selectId, setSelectId] = useState(null);

  const handleCatagoryClick = idx => {
    setSelectId(idx);
  };

  return (
    <div>
      {catagoryPlant.map(catagory => (
        <TreeCatagory
          key={catagory.id}
          catagory={catagory}
          selectId={selectId}
          handleCatagoryClick={handleCatagoryClick}
        ></TreeCatagory>
      ))}
    </div>
  );
};

export default TreeCatagories;
