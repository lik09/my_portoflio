import React from 'react';
import { Button, Card, Flex } from 'antd';
import './ProjectCard.css';
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { LuSquareArrowOutUpRight, LuUserRound } from "react-icons/lu";
import { IoMdCode } from "react-icons/io";

const ProjectCard = () => {
  return (
    <Card
      bodyStyle={{
        padding: 2, // This removes the default inner padding
      }}
      bordered={false}
      className='project-card'
      style={{
        width: '100%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        borderRadius: 8,
        textAlign:'start'
      }}
    >
      {/* thumi */}
      <img style={{
        width:'100%',
        height:270,
        borderRadius: 5,
        objectFit:'cover'
      }}
      
      src="https://imgs.search.brave.com/OXX7yWw8GkAJAiehiaeZES5mdF_5crihUIXeabnqtk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3VuZmxvd2Vy/bGFiLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMy9Q/b3dlci1CaS1FY29t/bWVyY2UtRGFzaGJv/YXJkLndlYnA" alt="" />

      {/* title project */}
      <div style={{padding:'10px 20px 25px 20px' }}>
          <h2>E-Commerce Dashbord</h2>
          <p style={{margin:0 ,fontSize:16 }}>The E-Commerce Dashboard provides a comprehensive overview of your online store's key metrics and operational data in a single, intuitive interface. It is designed to help store managers and business owners quickly monitor sales performance, customer behavior, inventory status, and marketing effectiveness.</p>
          <h4>Technologies:</h4>
          <Flex
            style={{
              padding: '10px 0px',
              width: '100%',
              height: 'auto',
              // background: 'red',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            {[
              { label: "React" },
              { label: "Laravel" },
              { label: "MySQL" },
              { label: "Express" },
              
            ].map((item, i) => (
              <Flex
                key={i}
                align="center"
                className="technologies"
                style={{
                  display: 'inline-flex',
                  whiteSpace: 'nowrap',
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                <p style={{ margin: 0 }}>{item.label}</p>
              </Flex>
            ))}
          </Flex>
          <Flex justify='space-between' style={{ marginTop:10 }}>
            <div>
              <CiCalendarDate /> 2023
            </div>
            <div>
              <IoTimeOutline /> 2 month
            </div>
            <div>
              <LuUserRound /> 10+ Users
            </div>
          </Flex>
          <Flex justify='space-between' style={{ marginTop:20 }}>
            <Button className='btn-live-deomo'>
              <LuSquareArrowOutUpRight /> Live Demo
            </Button>
            <Button className='btn-code'> 
              <IoMdCode size={20} /> Code
            </Button>
          </Flex>
      </div>
    </Card>
  );
};

export default ProjectCard;
