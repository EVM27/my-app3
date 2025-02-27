
import React from 'react';
import Star from './Star';

interface StarsProps {
    count?: number; 
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
    if (isNaN(count) || count < 1 || count > 5) {
        return null;
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }).map((_, index) => (
                <Star key={index} />
            ))}
        </ul>
    );
};

export default Stars;