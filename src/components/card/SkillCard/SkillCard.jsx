import React from 'react'
import './SkillCard.css';
import { Card, Flex, Progress, Rate } from 'antd';
import { FaReact } from 'react-icons/fa';

function SkillCard({ data }) {
  return (
    <div>
        <Card 
        className='skill-container'
        style={{
            width: '100%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
            borderRadius: 8,
            textAlign:'start'
        }}>
            <Flex vertical>
                <Flex justify='space-between' style={{ width:'100%' }}>
                    <Flex justify="space-between" style={{ width: '100%', height: 60 }}>
                        <Flex align="center" justify="center" className="icon-techno" style={{ flexShrink: 0 }}>
                            <img
                            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                            alt=""
                            width={50}
                            height={50}
                            />
                        </Flex>

                        <Flex
                            vertical
                            style={{
                            padding: '0px 10px',
                            flexGrow: 1,
                            minWidth: 0,  // important to allow ellipsis in children
                            }}
                        >
                            <h2 style={{ margin: 0, fontSize: 18 }}>React</h2>
                            <p
                            style={{
                                fontSize: 16,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                margin: 0,
                            }}
                            >
                            Building modern interactive user interfaces
                            </p>
                        </Flex>

                        <Flex
                            align="center"
                            justify="center"
                            style={{
                            flexShrink: 0,
                            paddingLeft: 10,
                            minWidth: 50,
                            }}
                        >
                            <span className="pct-status">100%</span>
                        </Flex>
                    </Flex>

                </Flex>
                
                <div style={{ width: '100%', padding: '16px 0px' }}>
                    <Progress percent={85} showInfo={false} strokeWidth={12} />
                </div>
                <Flex justify='space-between'>
                   <span style={{fontSize:16 ,fontWeight:500 }}> Expert</span>
                   <Rate  defaultValue={2.5} />
                </Flex>
          
            </Flex>
        </Card>
    </div>
  )
}

export default SkillCard;