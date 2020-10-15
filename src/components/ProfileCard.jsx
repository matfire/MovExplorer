import React, { useState } from 'react'
import { useEffect } from 'react'
import { Container } from 'reactstrap'

const ProfileCard = ({photo, name, role}) => {

    return (
        <div className="mt-2 mb-2">
            <div align="center" className="details__actor__profile">
                <img src={photo} alt={name} className="mb-2"/>
                <h4 className='text-center'>{name}</h4>
                <strong>as</strong>
                <h4 className='text-center'>{role}</h4>
            </div>
        </div>
    )
}

export default ProfileCard