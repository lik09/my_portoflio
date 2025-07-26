import React from 'react'
import './ContactCard.css';
import { IoMdArrowForward } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import { Card, Flex } from 'antd';

function ContactCard() {
  return (
    <Card 
    className='contact-card'
    >
        <Flex align='center' justify='space-between'>
            <Flex align='center' justify='center' className='contact-icon'>
            <MdOutlineMail color='red' size={35}/>
            </Flex>
            <Flex vertical 
            style={{ 
            width:'87%' ,height:80, 
            background:'#fff',
            fontSize:16,
            padding:'0px 10px'
            }}>
            <h3>Email</h3>
            <p>hello@gmail.com</p>
            <p>Send me an email anytime</p>
            </Flex>
            <div>
            <IoMdArrowForward size={20}/>
            </div>
        </Flex>
    </Card>
  )
}

export default ContactCard;
