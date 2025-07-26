// ProjectPage.js
import React, { useState } from 'react';
import { Col, Flex, Row } from 'antd';
import ProjectCard from '../../components/card/ProjectCard/ProjectCard';
import MenuButtonProject from '../../components/button/MenuButtonProject';

const listMenu = ['All', 'Full Stack', 'Frontend', 'Backend'];
// Sample projects
const allProjects = [
  { id: 1, type: 'Full Stack' },
  { id: 2, type: 'Frontend' },
  { id: 3, type: 'Backend' },
  { id: 4, type: 'Full Stack' },
  { id: 5, type: 'Frontend' },
];

function ProjectPage() {
  // const [activeMenu, setActiveMenu] = useState('All');
  const [activeMenu, setActiveMenu] = useState(listMenu[0]); 
  const filteredProjects =
    activeMenu === 'All'
      ? allProjects
      : allProjects.filter((project) => project.type === activeMenu);
   console.log("Show count: " ,filteredProjects);
  return (
    <div>
      <Flex justify="center" style={{ marginTop: 25, padding: '10px 0px' }}>
        <MenuButtonProject activeMenu={activeMenu} onChange={setActiveMenu} listMenu={listMenu} />
      </Flex>

      <Row gutter={[16, 30]} style={{ marginTop: 25, padding: '0px 0px' }}>
        {filteredProjects.map((project, idx) => (
          <Col xs={24} sm={12} md={8} key={idx}>
            <ProjectCard data={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProjectPage;
