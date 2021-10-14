import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
        {
                img: mechanic1,
                name: 'Andrew Smith',
                expertize: '-Engine Expert-'
        },
        {
                img: mechanic2,
                name: 'John Anderson',
                expertize: '-Polish Expert-'
        },
        {
                img: mechanic3,
                name: 'Zakaria Smith',
                expertize: '-Coloring Expert-'
        },
        {
                img: mechanic4,
                name: 'Sakib Anderson',
                expertize: '-Alrounder Expert-'
        },
]

const Experts = () => {
        return (
                <div className="container">
                        <h1 className="text-center pt-5 pb-5 fw-bold">Our Expertise</h1>
                        <div className="row row-cols-4 row-cols-md-4 g-4">
                                {
                                        experts.map(expert => <Expert
                                                expert={expert}
                                                key={expert.name}
                                        ></Expert>)
                                }
                        </div>

                </div>
        );
};

export default Experts;