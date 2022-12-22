import React, {FC} from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: React.ReactChild | React.ReactNode;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         variant,
         children
    }) => {
    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? "25px solid lightgray" : "",
            background: variant === CardVariant.primary ? "lightsalmon" : ""
        }}>
            {children}
        </div>
    );
};

export default Card;