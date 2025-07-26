import React from 'react'
import { Button, Card, Col, Flex, Form, Input, Row } from 'antd';
import ContactCard from '../../components/card/ContactCard/ContactCard';
import { UserOutlined } from '@ant-design/icons';
import { FiBookmark } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";
import './ContactPage.css';

function ContactPage() {
  return (
    <>
      <Row gutter={16}>
        <Col  xs={24} md={12}>
          <div style={{ width: '100%', textAlign:'start' }}>
            <div style={{ padding:'20px 0px'}}>
              <h1>Let's Talk</h1>
              <p 
                style={{fontSize:16 }}
                >
                I'm always excited to work on new projects and collaborate with 
                amazing people. Don't hesitate to reach out if you have any quetions ot just 
                want to say hello!
              </p>
            </div>
            {/*  */}
            {[...Array(4)].map((_, idx) => (
              <ContactCard />
            ))}
          </div>
        </Col>
        <Col  xs={24} md={12}>
          <div style={{ width: '100%', padding:'20px 0px', textAlign: 'start',fontSize:16 }}>
          <Card>
            <Form layout="vertical">
              {/* Heading with bottom spacing */}
              <h1 style={{ marginBottom: 24 }}>Send Message</h1>

              {/* Name and Email in one row */}
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Your Name"
                    name="yourname"
                    rules={[{ required: true, message: "Please enter your name" }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input className='hight-input' prefix={<UserOutlined />} placeholder="Your name" />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Your Email"
                    name="youremail"
                    rules={[{ required: true, message: "Please enter your email" }]}
                    style={{ marginBottom: 20 }}
                  >
                    <Input className='hight-input' prefix={<MdOutlineEmail />} placeholder="Your email" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Subject */}
              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: "Please enter a subject" }]}
                style={{ marginBottom: 20 }}
              >
                <Input className='hight-input' prefix={<FiBookmark />} placeholder="Subject" />
              </Form.Item>

              {/* Message field */}
              <Form.Item
                label="Your Message"
                name="yourmessage"
                rules={[{ required: true, message: "Please enter your message" }]}
                style={{ marginBottom: 20 }}
              >
                <div style={{ position: 'relative' }}>
                  <LuMessageSquareText
                    style={{
                      position: 'absolute',
                      top: 12,
                      left: 10,
                      fontSize: 16,
                      zIndex: 1,
                    }}
                  />
                  <Input.TextArea
                    placeholder="Your message"
                    rows={4} 
                   
                    style={{ paddingLeft: 35 ,fontSize:16, lineHeight: '24px'}}
                  />
                </div>
              </Form.Item>

              {/* Submit button with top spacing */}
              <Form.Item style={{ marginTop: 50 }}>
                <Button className='hight-input' type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
          </div>

        </Col>
      </Row>
    </>
  )
}

export default ContactPage;
