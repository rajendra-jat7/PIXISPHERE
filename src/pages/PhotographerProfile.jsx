import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PhotographerProfile() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/photographers/${id}`).then((res) => {
      setProfile(res.data);
    });
  }, [id]);

  if (!profile) return <div className='p-6'>Loading...</div>;

  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <div className='flex flex-col sm:flex-row gap-6'>
        <img
          src={profile.profilePic}
          alt={profile.name}
          className='w-60 h-60 object-cover rounded-xl'
        />
        <div>
          <h1 className='text-2xl font-bold'>{profile.name}</h1>
          <p className='text-gray-600'>{profile.bio}</p>
          <div className='mt-2 text-sm text-gray-500'>{profile.location}</div>
          <div className='mt-1 text-sm font-medium'>
            Price: ₹{profile.price}
          </div>
          <div className='mt-1'>Rating: ⭐ {profile.rating}</div>
          <div className='mt-2 flex flex-wrap gap-2'>
            {profile.styles.map((style, i) => (
              <span
                key={i}
                className='text-xs bg-gray-200 rounded-full px-2 py-1'
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h2 className='mt-8 text-xl font-semibold'>Gallery</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2'>
        {profile.portfolio.map((img, i) => (
          <img
            key={i}
            src={img}
            className='w-full h-40 object-cover rounded-lg'
            alt={`portfolio-${i}`}
          />
        ))}
      </div>

      <h2 className='mt-8 text-xl font-semibold'>Reviews</h2>
      <div className='space-y-3 mt-2'>
        {profile.reviews.map((r, i) => (
          <div key={i} className='border p-3 rounded-md bg-white'>
            <div className='font-medium'>
              {r.name} - ⭐ {r.rating}
            </div>
            <p className='text-sm text-gray-600'>{r.comment}</p>
            <p className='text-xs text-gray-400'>{r.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotographerProfile;
