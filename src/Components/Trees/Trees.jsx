import React, { use } from 'react';
import Tree from './Tree';

const Trees = ({ plantsData }) => {
  let useTrees = use(plantsData);
  let allPlants = useTrees.plants;
  console.log(allPlants);

  return (
    <div className="grid grid-cols-12 gap-[30px]">
      <div className="col-span-2 "></div>
      <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allPlants.map(tree => (
          <Tree key={tree.id} tree={tree}></Tree>
        ))}
      </div>
      <div className="col-span-2 bg-gray-200"></div>
    </div>
  );
};

export default Trees;
