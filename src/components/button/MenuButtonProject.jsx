import React from 'react';
import { Button, Flex } from 'antd';
import './MenuButtonProject.css';

function MenuButtonProject({ activeMenu, onChange, listMenu }) {
  return (
    <div className="menu-button-container">
      <Flex wrap="wrap" gap="small" justify="center" align="center">
        {Array.isArray(listMenu) &&
          listMenu.map((item) => (
            <Button
              key={item}
              className={`btn-menu-project ${activeMenu === item ? 'active' : ''}`}
              onClick={() => onChange(item)}
            >
              {item}
            </Button>
          ))}
      </Flex>
    </div>
  );
}

// Provide default value if prop is missing
// MenuButtonProject.defaultProps = {
//   listMenu: [],
// };

export default MenuButtonProject;
