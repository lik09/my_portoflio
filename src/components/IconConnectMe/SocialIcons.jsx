import React from 'react';
import { Flex } from 'antd';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconList = [FaGithub, FaFacebook, FaTwitter, FaLinkedin];

const SocialIcons = () => {
  return (
    <Flex justify="flex-start" style={{ marginTop:5 }}>
      {iconList.map((IconComponent, i) => (
        <Flex
          align="center"
          justify="center"
          key={i}
          style={{
            width: 50,
            height: 50,
            background: '#fff',
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: '50%',
            marginLeft: i > 0 ? 15 : 0,
            color: 'black',
            fontSize: 30,
            // cursor:'pointer'
          }}
        >
          <IconComponent />
        </Flex>
      ))}
    </Flex>
  );
};

export default SocialIcons;
