import React from 'react'

function renderLi (option, index, onClick) {
    return <div key={index}><div><img src={option.cover_image} onClick={onClick} name={option.master_id} id={index} width={200} /></div><div>{option.title}</div><div>{option.style}</div><div>{option.year}</div></div>
}

const UlComponent = ({ classId, options, onClick }) => (
    <div>
        {options.map((option, index) => renderLi(option, index, onClick))}
    </div>
)
export default UlComponent
