import React from 'react'
import "./UserCard.css"
import poopic from '../assets/poopic.jpg'

const UserCard = (props) => {
return (
<div className='user-container' style={props.style}>
<h2 id='user-name'>{props.name}</h2>
<img id='user-img' src=
{props.img} alt={props.img}></img>
<p
id='user-desc'>{props.desc}</p>
</div>
)
}

export default UserCard
