import React, { useState, useEffect } from 'react'
import { Card, Dropdown, Loader } from '../Index'
import axios from '../../utils/Axios'

function Cards() {
    const [trendingShows, setTrendingShows] = useState([])  
    // const [filteredShows, setFilteredShows] = useState([])
    const getTrendingShows = async () => {
        const res = await axios.get(`trending/all/day`)
        setTrendingShows(res.data.results)
    }
    const handleChange = async (e) => {
      const res = await axios.get(`trending/${e}/day`)
      setTrendingShows(res.data.results)
    }
    useEffect(() => {
        getTrendingShows()
    }, [])
  return (
    <div className='w-full h-[39.9vh] mt-2'>
      <div className='w-full h-full overflow-x-scroll'>
        <div className='flex gap-4 items-center'>
          <h1 className='text-zinc-500 text-3xl font-semibold'>Trending</h1>        
          <Dropdown title="Filter" handleChange={handleChange} options={["all", "movie", "tv"]} />
        </div>
        <div className='w-fit flex flex-shrink-0 mt-2'>
          {trendingShows.length > 0 ? (
            trendingShows.map((Shows) => (
              <Card key={Shows.id} Shows={Shows} />
            ))
          ) : (
            <div className='w-[80vw] pt-20 flex items-center justify-center'>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cards
