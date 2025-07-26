import React, { useEffect, useState } from "react";
import { Row, Col, Flex, Button, FloatButton } from "antd";
import "./HomePage.css";
import my_photo from "../../assets/me_photo.jpg";
import {
  FaReact,
  FaDatabase,
  FaLaravel,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { MdCheckCircleOutline } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import TypingHeader from "../../components/TypingHeader/TypingHeader";
import ToggleButton from "../../components/button/ToggleButton";
import HightSchoolEducationCard from "../../components/card/FormalEducation/HightSchoolEducationCard";
import UniversityEducationCard from "../../components/card/UniversityEducation/UniversityEducationCard";
import ShortCourseCard from "../../components/card/ShortCourse/ShortCourseCard";
import ProjectPage from "../projects/ProjectPage";
import SocialIcons from "../../components/IconConnectMe/SocialIcons";
import SkillPage from "../skills/SkillPage";
import ContactPage from "../contact/ContactPage";
import { IoIosArrowUp } from "react-icons/io";
import { IoArrowUpSharp } from "react-icons/io5";

const brandData = [
  { name: "React", icon: <FaReact />, top: 80, left: 150, aos: "fade-right" },
  { name: "Database", icon: <FaDatabase />, top: 50, right: 170, aos: "fade-left" },
  { name: "MySQL", icon: <SiMysql />, top: 200, right: 100, aos: "fade-left" },
  { name: "Laravel", icon: <FaLaravel />, bottom: 100, right: 120, aos: "fade-left" },
  { name: "JavaScript", icon: <FaJsSquare />, top: 260, left: 100, aos: "fade-right" },
  { name: "Brand 6", icon: <FaJsSquare />, bottom: 50, left: 200, aos: "fade-left" },
];

const technologies = ["React", "Node.js", "MySQL", "TypeScript", "AWS"];


function HomePage() {

  const [eduType, setEduType] = useState('university'); // state for toggle
  const [showFloatButton, setShowFloatButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".brand-box").forEach((el) => {
        el.classList.add("bounce-forever");
      });
    }, 1200);

    // Scroll listener
    const handleScroll = () => {
      setShowFloatButton(window.scrollY > 300); // show button if scroll > 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ExperienceCard = () => (
    <div className="card-expericence" style={{ background: '#fff' }}>
      <Flex justify="space-between" style={{ height: 100 }}>
        <div style={{ padding: 5, width: '10%', boxSizing: 'border-box' }}>
          icon
        </div>
        <Flex vertical align="start" justify="space-between" style={{ padding: 5, width: '90%', boxSizing: 'border-box' }}>
          <h3>Senior Full Stack Developer</h3>
          <p style={{ color: 'blue', fontWeight: '700' }}>Tech Solutions Inc.</p>
          <p>2025 - Present Phnom Penh <span style={{ fontSize: 12, color: 'blue', fontWeight: '700' }}>Full time</span></p>
        </Flex>
      </Flex>
      <div style={{  padding: '5px 0px' }}>
        <p style={{ fontSize: 16, textAlign: 'start' }}>
          Leading development of scalable web applications using React, Node.js, and 
          MySQL. Mentoring junior developers and implementing best practices for code 
          quality and performance optimization.
        </p>
      </div>
      <div style={{ }}>
        <h3 style={{ textAlign: 'start', padding: '10px 0' }}>Technologies Used:</h3>
        <Flex wrap="wrap">
          {technologies.map((tech, i) => (
            <div className="box-lang" key={i}>{tech}</div>
          ))}
        </Flex>
      </div>
       <Flex vertical justify="space-evenly" style={{ height:100}}>
        <h3 style={{ textAlign: 'start' }}>Key Achievements:</h3>
        <Flex align="center" style={{ textAlign: 'start' }}>
          <MdCheckCircleOutline style={{ fontSize: 18, color: 'green',marginRight:8 }} /> 
          <p>Increased application performance by</p>
        </Flex>
        <Flex align="center" style={{ textAlign: 'start' }}>
          <MdCheckCircleOutline style={{ fontSize: 18, color: 'green',marginRight:8 }} /> 
          <p>Led team of developer</p>
        </Flex>
        <Flex align="center" style={{ textAlign: 'start' }}>
          <MdCheckCircleOutline style={{ fontSize: 18, color: 'green',marginRight:8 }} /> 
          <p>Implemented CI/CD pipeline</p>
        </Flex>
      </Flex>
    </div>
  );

  return (
    <div className="home-container">
      <Row id="home" gutter={0} align="middle" >
        <Col xs={24} md={12}>
          <Flex vertical justify="center"    className="start-home">
            <TypingHeader text="Nhorn Lik" speed={80} />
            <p data-aos="fade-right" data-aos-delay="200" style={{ fontSize: 18, marginTop: 10 }}>
              A passionate <span style={{color:'#0065F8'}}>Full Stack Developer</span> dedicated to building impactful and scalable
              web applications with modern technologies.
            </p>
            <br />
            <Flex vertical>
              <h3 style={{ padding: '18px 0' }}>Connect with me:</h3>
              <SocialIcons />
            </Flex>
            <Flex style={{ margin: '50px 0', width: '100%' }}>
              <Button
                type="primary"
                className="btn btn-contact"
                href="#contact"
              >
                Contact Me
              </Button>

              <Button className="btn btn-dowload">Download CV</Button>
            </Flex>
            {/* <h4 style={{ paddingTop: 10 }}>Quick Stats:</h4> */}
            {/* <Flex style={{ marginTop: 10 }}>
              {[
                { label: "Happy Clients", value: "50+" },
                { label: "Projects", value: "100+" },
                { label: "Awards", value: "15+" },
                { label: "Experience", value: "3+ Year" },
              ].map((item, i) => (
                <Flex key={i} align="center" className="quick-stats">
                  <Flex align="center" justify="center" style={{ width: 38, height: 38, borderRadius: '50%', background: 'blue' }}>a</Flex>
                  <Flex vertical style={{ padding: 5 }}>
                    <p style={{ fontSize: 16, fontWeight: 'bold' }}>{item.value}</p>
                    <p style={{ fontSize: 14, fontWeight: '500' }}>{item.label}</p>
                  </Flex>
                </Flex>
              ))}
            </Flex> */}
          </Flex>
        </Col>
        <Col xs={24} md={12}>
          <Flex align="center" justify="center" className="image-container">
            <img src={my_photo} alt="Nhorn Lik" className="my-photo" data-aos="zoom-in" />
            {brandData.map((brand, index) => (
              <div
                key={index}
                className="brand-box"
                data-aos={brand.aos}
                data-aos-delay={index * 100}
                style={{
                  ...(brand.top !== undefined && { top: brand.top }),
                  ...(brand.left !== undefined && { left: brand.left }),
                  ...(brand.right !== undefined && { right: brand.right }),
                  ...(brand.bottom !== undefined && { bottom: brand.bottom }),
                }}
              >
                <div className="brand-icon">{brand.icon}</div>
              </div>
            ))}
          </Flex>
        </Col>
      </Row>

      <div  id="experience" style={{ background: 'transparent', textAlign: 'center', padding: '20px 0' }}>
        <h1 style={{ fontSize: 30 }}>Work <span style={{ color: 'blue' }}>Experience</span></h1>
        <p style={{ fontSize: 20 }}>My professional journey in web development showcasing growth from <br /> junior developer to senior full stack engineer</p>

        <Row gutter={[16, 30]} style={{ marginTop:20 ,padding: '10px 0px'}}>
          {[...Array(4)].map((_, idx) => (
            <Col xs={24} md={12} key={idx}>
              <ExperienceCard />
            </Col>
          ))}
        </Row>
      </div>

      <div id="education" style={{ background: 'transparent', textAlign: 'center', padding: '20px 0' }}>
        <h1  style={{ fontSize: 30 }}>Educational <span style={{ color: 'blue' }}>Background</span></h1>
        <p style={{ fontSize: 20 }}>
          My academic journey and continuous learning path in computer <br />
          science and web development
        </p>

        <ToggleButton selected={eduType} onChange={setEduType} />

        
        {eduType === 'hight_school' ? (
          <Row gutter={[16, 30]} style={{ marginTop: 20, padding: '10px 0px' }}>
            {[...Array(1)].map((_, idx) => (
              <Col xs={24} md={24} key={idx}>
                <HightSchoolEducationCard />
              </Col>
            ))}
          </Row>
        ) : eduType === 'university' ? (
          <Row gutter={[16, 30]} style={{ marginTop: 20, padding: '10px 0px' }}>
            {[...Array(1)].map((_, idx) => (
              <Col xs={24} md={24} key={idx}>
                <UniversityEducationCard />
              </Col>
            ))}
          </Row>
        ) : (
          <Row gutter={[16, 24]} style={{ marginTop: 20 }}>
            {[...Array(6)].map((_, idx) => (
              <Col xs={24} sm={12} md={6} key={idx}>
                <ShortCourseCard />
              </Col>
            ))}
          </Row>
        )}

         

      </div>

      {/* Project */}
      <div id="project" style={{ background: 'transparent', textAlign: 'center', padding: '20px 0' }}>
        <h1  style={{ fontSize: 30 }}>Featured <span style={{ color: 'blue' }}>Project</span></h1>
        <p style={{ fontSize: 20 }}>A Showcase of my recent work in web development, featuring full-stack <br /> application and modern frontend solutions</p>
        {/* button */}
        <ProjectPage />

      </div>

      {/* Skills */}
      <div id="skill"  style={{ background: 'transparent', textAlign: 'center', padding: '20px 0' }}>
        <h1 style={{ fontSize: 30 }}>My <span style={{ color: 'blue' }}>Skills</span></h1>
        <p style={{ fontSize: 20 }}>A comprehensive overview of my technical expertise and proficiency <br /> across various technologies and tools</p>
        {/* button */}
        <SkillPage />

      </div>

      {/* contact*/}
      <div id="contact" style={{ background: 'transparent', textAlign: 'center', padding: '20px 0' }}>
        <h1  style={{ fontSize: 30 }}>
          Get In <span style={{ color: 'blue' }}>Touch</span>
        </h1>
        <p style={{ fontSize: 20 }}>
          Ready to start your next project? Let's discuss how we can work <br />
          together to bring your ideas to life
        </p>

        <Row gutter={[16, 30]} style={{ marginTop: 20, padding: '10px 0px' }}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <ContactPage />
          </Col>
        </Row>

      </div>

      {showFloatButton && (
        <FloatButton
          icon={<IoArrowUpSharp />}
          onClick={handleScrollToTop}
          type="primary"
          style={{ 
            right: 50,
            bottom: 30
           
          }}
        />
      )}
    </div>
  );
}

export default HomePage;
