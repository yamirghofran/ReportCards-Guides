import React from 'react'

function YoutubeVideo({ videoId }) {
  return (
    <div className='overflow-hidden flex justify-center shadow-xl rounded-xl'>
        <iframe className='rounded-xl w-full' height='400'  src={`https://www.youtube.com/embed/${videoId}`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={true}></iframe>
    </div>
    
  )
}

export default YoutubeVideo