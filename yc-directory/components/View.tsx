import React, { use } from 'react';
import Ping from './Ping';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

const View = async ({id}: {id: string}) => {
  // useCdn = false fetches real-time data from db rather than getting from sanity's cache
  const {views: totalViews} = await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY, {id});
  
  // To-do: Modify view count when anyone views the startup
  
  return (
    <div className='view-container'>
      <div className='absolute -top-1.5 -right-2'>
        <Ping />
      </div>
      <p className='view-text'>
        <span className='font-black'>
          {totalViews} {totalViews > 1 ? 'views' : 'view'}
        </span>
      </p>
    </div>
)
};

export default View;