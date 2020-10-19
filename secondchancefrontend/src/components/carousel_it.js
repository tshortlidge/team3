import React from 'react';
import {Carousel} from "react-bootstrap";

export default function Carousel_It(data)
{


    const widthSz  = '1920px';
    const heightSz = '1080px';




    return(
        <div>
            {
                data.data.map(function (selectedPic, index) {
                    return (
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className={"center"}
                                    style={{height: heightSz, width: widthSz}}
                                    key={index}
                                    className="d-block w-100"

                                    src={selectedPic.valueURL}
                                    alt={selectedPic.valueFileName}
                                />


                                <Carousel.Caption>

                                    <table style={{
                                        backgroundColor: 'rgba(23,32,42, 0.55)', maxHeight: heightSz,
                                        maxWidth: widthSz
                                    }}>
                                        <h3 style={{textAlign: "center"}}>{selectedPic.valueTitle}</h3>
                                    </table>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    )
                })
            }
        </div>
    );
}

export function Run_Carousel(props)
{
    return(
        <div>
            <Carousel_It data = {props.data.reviewArr.reviewComment} />
        </div>
    )
}

