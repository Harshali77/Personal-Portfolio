import React, { Component } from 'react';

const Skill = ({ title, skills }) => {
    return (
        <div className="columns portfolio-item">
            <h1>{title}</h1>
            <div className="item-wrap">
                <ul>
                    {skills.map(skill => <li>{skill}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Skill;