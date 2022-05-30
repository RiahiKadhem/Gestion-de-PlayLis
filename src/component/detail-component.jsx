import React from 'react'

const DetailComponent = ({ master, trackList, onClick }) => (
    <div>
        <div className='playlist'>
            <div className='row'>
                <div className='col'>
                    <img src={master.cover_image} alt={master.title} />
                    <h3>{master.title}</h3>
                    <div>style: {master.style}</div>
                    <div>annee: {master.year}</div>
                </div>
                <div className='col'>
                    <ul className='list-group'>
                        {trackList.map((track, index) => <li key={index}><p name={track.title} id={track.uri} onClick={onClick}>{track.title}</p></li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
export default DetailComponent
