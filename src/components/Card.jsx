function Card({ photographer, onOpenModal }) {
  return (
    <div className='bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col'>
      <img
        src={photographer.profilePic}
        alt={photographer.name}
        className='w-full h-48 object-cover rounded-lg mb-3'
      />
      <div className='flex-1'>
        <h2 className='text-lg font-semibold'>{photographer.name}</h2>
        <p className='text-sm text-gray-500'>{photographer.location}</p>
        <p className='text-sm font-medium mt-1'>
          Starts at ₹{photographer.price}
        </p>
        <div className='text-sm mt-1'>⭐ {photographer.rating}</div>
        <div className='flex flex-wrap gap-1 mt-2'>
          {photographer.tags.map((tag, i) => (
            <span
              key={i}
              className='bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-700'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => onOpenModal(photographer.id)}
        className='mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 text-sm'
      >
        View Profile
      </button>
    </div>
  );
}

export default Card;
