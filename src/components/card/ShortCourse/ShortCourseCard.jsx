import React from 'react';
import { Card } from 'antd';
import './ShortCourseCard.css';

const ShortCourseCard = () => {
  return (
    <Card
      title="Certification Title"
      bordered={false}
      className='caed-cert'
      style={{
        width: '100%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        borderRadius: 8,
      }}
    >
      <p>Issued by: Example Org</p>
      <p>Date: 2025-01-01</p>
    </Card>
  );
};

export default ShortCourseCard;
