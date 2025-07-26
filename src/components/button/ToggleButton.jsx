import React from 'react';
import { Button, Flex } from 'antd';
import './ToggleButton.css';

const ToggleButton = ({ selected, onChange }) => {
  const handleToggle = (value) => {
    onChange(value); // trigger parent state change
  //  alert(`You selected ${value === 'education' ? 'Formal Education' : 'Certifications'}`);
  };

  return (
    <Flex style={{ padding: 10 }}>
      <Flex className="btn-toggle-action" style={{ margin: 'auto' }}>
        <Button
          type="text"
          className={`btn-toggle btn-hight-sch ${selected === 'hight_school' ? 'active' : ''}`}
          onClick={() => handleToggle('hight_school')}
        >
          Hight School
        </Button>
        {/* Optional divider */}
        <Button
          type="text"
          className={`btn-toggle btn-univeristy ${selected === 'university' ? 'active' : ''}`}
          onClick={() => handleToggle('university')}
        >
          Univeristy
        </Button>
        <Button
          type="text"
          className={`btn-toggle btn-short-course ${selected === 'short_course' ? 'active' : ''}`}
          onClick={() => handleToggle('short_course')}
        >
          Short Course
        </Button>
      </Flex>
    </Flex>
  );
};

export default ToggleButton;
