import React from 'react';
import {Run_Carousel} from './carousel_it';

export class Review_carousel extends React.Component
{
    constructor(props) {
        super(props);
        this.data = {};

        this.data.show = false;

        this.data.reviewArr = [
            {
                label: 'pic_1',
                valueTitle: 'Abundant of Features of Functionalities',
                valueURL: '../pictures/patient_avatar/pat_avatar_1.jpg',
                valueFileName: 'pelvis-x-ray_thumb-1-732x549.jpg',
                valueDescription: 'Patient has fracture, joint dislocation and effusion, and several pediatric pathologies involving the pelvic girdle',
                reviewComment: 'Dr. Fabian was fantastic! One second diagnosis with my wife and she\'s now a brand new person!'
            },
            {
                label: 'pic_2',
                valueTitle: 'In-depth Analytical Tools for Physicians',
                valueURL: '../pictures/patient_avatar/pat_avatar_2.jpg',
                valueFileName: 'chest-xray.jpg',
                valueDescription: 'It\'s evident patient has conditions such as pneumonia, heart failure, lung cancer, tuberculosis, sarcoidosis, and lung tissue scarring.',
                reviewComment: 'Absolutely horrid! Dr. Jacobs saw my colonoscopy results and assumed it was my trachea. So what if I have coprophagia!'
            },
            {
                label: 'pic_3',
                valueTitle: 'Same Care at a Lower Price',
                valueURL: '../pictures/patient_avatar/pat_avatar_3.jpg',
                valueFileName: 'hand-xray.jpg',
                valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.',
                reviewComment: 'AMAZING! She was able to determine from my chest X-rays that I have lung cancer '
                    + ' from working in the mines and not cigarettes! Now I can retire happy smoking!'
            },
            {
                label: 'pic_4',
                valueTitle: 'SAME DUDE! NEW SHIRT!',
                valueURL: '../pictures/patient_avatar/pat_avatar_4.jpg',
                valueFileName: 'hand-xray.jpg',
                valueDescription: 'Examined the radiocarpal and distal radioulnar joints, the carpals, metacarpals, and phalanges.',
                reviewComment: 'This doc looked at my MRIs and clinically confirmed that I was a sociopath. '
                    + 'I am going to pay him a visit in-person to give him another review. Not sure '
                    + 'how he\'d feel about that.'
            }
        ];
    };

  render(){
      return(
          <div>
            <Run_Carousel data={this.data}/>
          </div>
      )
  }
};