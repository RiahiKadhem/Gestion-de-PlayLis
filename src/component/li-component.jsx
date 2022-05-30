import React from 'react'

function renderLi (option, value) {
    return <li value={option.style} defaultValue={value === option.style}><a href={option.uri}>{option.title}</a><img src={option.img} /> {option.year}</li>
}

const UlComponent = ({ classId, value, options }) => (

    <ul class={classId}>

        {options.map(option => renderLi(option, value))}
    </ul>

)
export default UlComponent
