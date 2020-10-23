import React from 'react';
import {Button, Carousel, Modal} from "react-bootstrap";

/*
    Img_links:
        https://i.ibb.co/wM6twyZ/bg-slide-1.png - https://ibb.co/72yhRvx
        https://i.ibb.co/Kb6swg6/bg-slide-2.png - https://ibb.co/ckJ8L9J
        https://i.ibb.co/9qJFqwf/bg-slide-3.jpg - https://ibb.co/wKT9KJb
        https://i.ibb.co/BKYZhjF/bg-slide-4.png - https://ibb.co/3YPNxWQ
        https://cdn.technadu.com/wp-content/uploads/2018/07/VPN-Encryption-Featured-1536x864.jpg
 */
export class Carousel_it extends React.Component
{
    constructor(props) {
        super(props);

        this.state =
            {
                show: false,

                pic:[
                    {
                        label: 'pic_1',
                        valueTitle: 'Abundant of Features of Functionalities',
                        valueURL: 'https://i.ibb.co/wM6twyZ/bg-slide-1.png',
                        valueFileName: 'pelvis-x-ray_thumb-1-732x549.jpg',
                        valueDescription:'Patient has fracture, joint dislocation and effusion, and several pediatric pathologies involving the pelvic girdle'
                    },
                    {
                        label: 'pic_2',
                        valueTitle: 'In-depth Analytical Tools for Physicians',
                        valueURL: 'https://i.ibb.co/Kb6swg6/bg-slide-2.png',
                        valueFileName: 'chest-xray.jpg',
                        valueDescription: 'It\'s evident patient has conditions such as pneumonia, heart failure, lung cancer, tuberculosis, sarcoidosis, and lung tissue scarring.'
                    },
                    {
                        label: 'pic_3',
                        valueTitle: 'Same Care at a Lower Price',
                        valueURL: 'https://i.ibb.co/9qJFqwf/bg-slide-3.jpg',
                        valueFileName: 'hand-xray.jpg',
                        valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.'
                    },
                    {
                        label: 'pic_4',
                        valueTitle: 'SAME DUDE! NEW SHIRT!',
                        valueURL: 'https://i.ibb.co/BKYZhjF/bg-slide-4.png',
                        valueFileName: 'hand-xray.jpg',
                        valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.'
                    },
                    {
                        label: 'pic_5',
                        valueTitle: 'CSUSB Senior Grade Encryption',
                        valueURL: 'https://cdn.technadu.com/wp-content/uploads/2018/07/VPN-Encryption-Featured-1536x864.jpg',
                        valueFileName: 'hand-xray.jpg',
                        valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.'
                    },
                    {
                        label: 'pic_6',
                        valueTitle: 'Same Qualifications You Can Trust! We got you!',
                        valueURL: 'https://i.ibb.co/JRQQJ2D/bg-slide-5.png',
                        valueFileName: 'hand-xray.jpg',
                        valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.'
                    },
                    {
                        label: 'pic_7',
                        valueTitle: 'Avoid extreme Anxiety from in-person doctor-patient visits',
                        valueURL: 'https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_619960997_370864.jpg',
                        valueFileName: 'hand-xray.jpg',
                        valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.'
                    },
                    {
                        label: 'pic_7',
                        valueTitle: '',
                        valueURL: 'https://pbs.twimg.com/media/EUSBvfmUUAEp_Yj?format=jpg&name=large',
                        valueFileName: 'hand-xray.jpg',
                        valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.'
                    }
                ]



            };
    }

    loopCarouselItem = () =>
    {
        const widthSz  = '1920px';
        const heightSz = '1080px';


        return(
            this.state.pic.map(function(selectedPic,index) {
                return (

                    <Carousel.Item>
                        <img
                            className={"center"}
                            style={{height: heightSz, width: widthSz}}
                            key={index}
                            className="d-block w-100"

                            src={selectedPic.valueURL}
                            alt={selectedPic.valueFileName}
                        />

                        <h1>Byebye</h1>

                        <Carousel.Caption>

                            <table style={{backgroundColor: 'rgba(23,32,42, 0.55)', maxHeight: heightSz,
                                maxWidth: widthSz}}>
                                <h3 style={{textAlign:"center"}}>{selectedPic.valueTitle}</h3>

                            </table>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        );
    }

    render() {
        return(
            <div >
                <table>
                    <tr>
                        <td>
                            <Carousel>
                                {this.loopCarouselItem()}
                            </Carousel>
                        </td>
                    </tr>
                </table>

                <br />
            </div>
        );
    }
}