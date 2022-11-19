import React from 'react';
import {Card,Button } from "react-bootstrap";
import formatCurrency from '../utilities/formatCurrency';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const quantity = 0
    return (
        <Card className="h-100">
            <Card.Img
            variant="top"
            src={imgUrl}
            height="200px"
            style={{objectFit: "cover"}}
            />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex
            justify-content-space-between align-items-baseline
            mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            
            <div className="mt-auto">
             {quantity === 0 ? (
              <Button className="w-100">+ Add To Cart</Button>
             ): <div className="d-flex align-items-center" style={{gap: ".5rem"}}>
                

                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem"}}>
                    <Button>-</Button>
                    <Button>+</Button>
                </div>
                </div>}
            </div>
        </Card.Body>
          

        </Card>
    );
}

export default StoreItem;