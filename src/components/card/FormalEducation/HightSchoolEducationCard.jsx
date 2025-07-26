import React from 'react';
import './HightSchoolEducationCard.css';
import { Flex } from 'antd';
import img1 from '../../../assets/hight_school/1.png';
import img2 from '../../../assets/hight_school/2.png';
import img3 from '../../../assets/hight_school/3.png';
import img4 from '../../../assets/hight_school/4.png';
import img5 from '../../../assets/hight_school/5.png';
import ViewGallery from '../../photos/ViewGallery';


const HightSchoolEducationCard = () => {
  const photos = [img1, img2, img3, img4, img5].map((img, i) => ({
    src: img,
    subHtml: `<h4> ${i + 1}</h4><p>Issued by ASPS</p>`
  }));


  return (
    <Flex vertical gap={16} className="card-formal-edu" style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
      {/* School Info Section */}
      <Flex justify="start" align="flex-start" gap={16}>
        <div style={{ minWidth: 60 }}>
          <img
            src="https://i.pinimg.com/1200x/32/37/f4/3237f4e43ece2c986825cbd4954275f4.jpg"
            alt="logo_school"
            width={60}
            height={60}
            style={{ objectFit: 'cover', borderRadius: 8 }}
          />
        </div>
        <Flex vertical>
          <h2 style={{ margin: 0 }}>Ang Svay Pum Sen High School</h2>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 400 ,textAlign:'left' }}>
            Location: Chhouk District, Kampot Province
          </p>
        </Flex>
      </Flex>

      {/* Date Info */}
      <div>
        <p style={{ fontSize: 16, textAlign: 'start', lineHeight: 1.7, margin: 0 }}>
          2014 – 2017 : Ang Svay Pum Sen High School <br />
          2017 – 2020 : Ang Svay Pum Sen High School
        </p>
      </div>

      {/* Certificate Image */}
      <div style={{ width: '100%' }}>
        {/* <img
          src="https://i.pinimg.com/1200x/29/16/06/291606c32b80f135f6499c57cd5135b3.jpg"
          alt="certificate"
          style={{
            width: '100%',
            maxHeight: 500,
            objectFit: 'cover',
            borderRadius: 8
          }}
        /> */}
         <ViewGallery images={photos} />
      </div>
    </Flex>
  );
};

export default HightSchoolEducationCard;
