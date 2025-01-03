import React, { use } from 'react';
import Ping from './Ping';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { writeClient } from '@/sanity/lib/write-client';
import { unstable_after as after } from 'next/server';

const View = async ({id}: {id: string}) => {
  // useCdn = false fetches real-time data from db rather than getting from sanity's cache
  const {views: totalViews} = await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY, {id});
  
  // issue with below code: it is sequential to above code so it will try to update it before
  // showing the data; we want to show the data first and then update it
  // so we use unstable_after
  // await writeClient
  //   .patch(id)
  //   .set({views: totalViews + 1})
  //   .commit()
  
  after(async () => 
    await writeClient
      .patch(id)
      .set({views: totalViews + 1})
      .commit(),
  )

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