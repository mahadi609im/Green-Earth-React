const Tree = ({ tree }) => {
  const { image, name, description, category, price } = tree;
  console.log(tree);

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="w-full h-[184px] bg-gray-400 rounded-lg mb-3">
        <img
          className="w-full object-cover h-full rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-[#1F2937]">{name}</h4>
        <p className="text-[12px] font-normal text-[#1F2937]">
          {description.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[#15803D] py-1 px-3 bg-[#DCFCE7] font-medium text-sm rounded-full">
            {category}
          </span>
          <p className="font-semibold text-[#1F2937] text-sm">
            ৳<span>{price}</span>
          </p>
        </div>
        <div>
          <button className="bg-[#15803D] rounded-full w-full px-5 py-3 text-base font-medium text-white cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tree;
