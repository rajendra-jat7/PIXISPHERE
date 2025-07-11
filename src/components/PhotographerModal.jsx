import { useEffect, useState } from 'react';
import axios from 'axios';

function PhotographerModal({ id, onClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/photographers/${id}`).then((res) => {
        setProfile(res.data);
      });
    }
  }, [id]);

  if (!id) return null;

  return (
    <div className='fixed inset-0 bg-gray-200 bg-opacity-50 z-50 flex items-center justify-center px-4'>
      <div className='bg-white max-w-3xl w-full rounded-lg overflow-y-auto max-h-[90vh] p-6 relative shadow-lg'>
        <button
          onClick={onClose}
          className='absolute top-2 right-3 text-gray-700 hover:text-black text-xl'
        >
          &times;
        </button>

        {!profile ? (
          <div className='text-center py-20 text-gray-500'>Loading...</div>
        ) : (
          <>
            <div className='flex flex-col sm:flex-row gap-6'>
              <img
                src={profile.profilePic}
                alt={profile.name}
                className='w-48 h-48 object-cover rounded-xl'
              />
              <div>
                <h1 className='text-2xl font-bold'>{profile.name}</h1>
                <p className='text-gray-600 mt-1'>{profile.bio}</p>
                <p className='text-sm text-gray-500 mt-1'>{profile.location}</p>
                <p className='mt-1 text-sm font-medium'>
                  Price: ₹{profile.price}
                </p>
                <p className='mt-1 text-sm'>⭐ {profile.rating}</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {profile.styles.map((s, i) => (
                    <span
                      key={i}
                      className='bg-gray-200 text-xs px-2 py-1 rounded-full'
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <h2 className='text-lg font-semibold'>Gallery</h2>
              <div className='grid grid-cols-2 gap-3 mt-2'>
                {profile.portfolio.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt='portfolio'
                    className='rounded-md object-cover h-40 w-full'
                  />
                ))}
              </div>
            </div>

            <div className='mt-6'>
              <h2 className='text-lg font-semibold'>Reviews</h2>
              <div className='space-y-3 mt-2'>
                {profile.reviews.map((r, i) => (
                  <div
                    key={i}
                    className='border p-3 rounded bg-gray-50 text-sm'
                  >
                    <div className='font-medium'>
                      {r.name} - ⭐ {r.rating}
                    </div>
                    <p className='text-gray-700 mt-1'>{r.comment}</p>
                    <p className='text-xs text-gray-400'>{r.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-6 text-right'>
              <button
                onClick={onClose}
                className='bg-black text-white py-2 px-4 rounded hover:bg-gray-800'
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PhotographerModal;
