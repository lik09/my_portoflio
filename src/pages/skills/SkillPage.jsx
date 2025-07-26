import React, { useState } from 'react';
import MenuButtonProject from '../../components/button/MenuButtonProject';
import { Col, Flex, Row } from 'antd';
import SkillCard from '../../components/card/SkillCard/SkillCard';


const listMenu = ['Frontend', 'Backend', 'Tool & Other'];
// Sample projects
const allSkill = [
  { id: 1, type: 'Backend' },
  { id: 2, type: 'Frontend' },
  { id: 3, type: 'Tool & Other'},
  { id: 4, type: 'Backend' },
  { id: 5, type: 'Frontend' },
  { id: 6, type: 'Backend' },
  { id: 7, type: 'Frontend' },
  { id: 8, type: 'Tool & Other'},
  { id: 9, type: 'Frontend' },
];


function SkillPage() {
  const [activeMenu, setActiveMenu] = useState(listMenu[0]); 
  const filteredSkill = allSkill.filter(skill => skill.type === activeMenu);

  return (
    <div>
      <Flex justify='center' style={{ marginTop:25 ,padding: '10px 0px'}}> 
        <MenuButtonProject activeMenu={activeMenu} onChange={setActiveMenu} listMenu={listMenu} />
      </Flex>
        <Row gutter={[16, 16]} style={{ marginTop:25 ,padding: '0px 0px'}}>
          {filteredSkill.map((skill) => (
            <Col xs={24} sm={24} md={24} lg={12}  key={skill.id}>
              <SkillCard data={skill} />
            </Col>
          ))}
        </Row>

    </div>
  )
}

export default SkillPage;
