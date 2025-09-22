const TreeCatagory = ({ catagory, handleCatagoryClick, selectId }) => {
  const { id, category_name } = catagory;

  return (
    <ul>
      <li
        onClick={() => handleCatagoryClick(id)}
        className={`py-2 pl-[10px] text-base font-normal text-[#1F2937] mb-0.5 rounded-sm cursor-pointer ${
          selectId === id ? 'bg-green-400' : ''
        }`}
      >
        {category_name}
      </li>
    </ul>
  );
};

export default TreeCatagory;
