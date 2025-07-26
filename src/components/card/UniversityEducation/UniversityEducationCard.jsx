import React from 'react';
import './UniversityEducationCard.css';
import { Flex } from 'antd';

import img1 from '../../../assets/hight_school/1.png';
import img2 from '../../../assets/hight_school/2.png';
import img3 from '../../../assets/hight_school/3.png';
import img4 from '../../../assets/hight_school/4.png';
import img5 from '../../../assets/hight_school/5.png';
import ViewGallery from '../../photos/ViewGallery';
import ruppImage from '../../../assets/rupp.png';


const UniversityEducationCard = () => {
  const photos = [img1, img2, img3, img4, img5].map((img, i) => ({
  src: img,
  subHtml: `<h4>Certificate ${i + 1}</h4><p>Issued by RUPP</p>`
}));

  //   const galleryImages = (Array.isArray(photos)
  //   ? photos
  //   : (() => {
  //       try {
  //         return JSON.parse(photos || '[]');
  //       } catch {
  //         return [];
  //       }
  //     })()
  // ).filter(Boolean).map(img => ({
  //   src: config.image_path + img,
  //   thumb: config.image_path + img,
  //    subHtml: i18n.language === 'kh'
  //     ? photoDetailsData.title_kh
  //     : photoDetailsData.title,
  // }));


  return (
    <Flex vertical gap={16} className="card-formal-edu" style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
      {/* School Info Section */}
      <Flex justify="start" align="flex-start" gap={16}>
        <div style={{ minWidth: 60 }}>
          <img
            src="https://www.rupp.edu.kh/logo/rupp_logo.png"
            alt="logo_school"
            width={60}
            height={60}
            style={{ objectFit: 'cover', borderRadius: 8 }}
          />
        </div>
        <Flex vertical>
          <h2 style={{ margin: 0 }}>Bachelor of Computer Science</h2>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 400 ,textAlign:'left' }}>
            University Royal University of Phnom Penh
          </p>
        </Flex>
      </Flex>

      {/* Date Info */}
      <div>
        <p style={{ fontSize: 16, textAlign: 'start', lineHeight: 1.7, margin: 0 }}>
          2020 – 2025 : Graduated of Bachelor degree of Computer Science in 
                        2025 at RUPP
         
        </p>
      </div>

      {/* Certificate Image */}
      <div style={{ width: '100%' }}>
        <img
          src={ruppImage}
          alt="certificate"
          style={{
            width: '100%',
            maxHeight: 500,
            objectFit: 'cover',
            borderRadius: 8
          }}
        />
        
      </div>
    </Flex>
  );
};

export default UniversityEducationCard;
