import React, { useState, useEffect } from "react";
import { Button, Divider, Drawer, Flex, Input, Layout, Menu } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import "./MainLayout.css";
import { MdContactPage, MdEmail, MdFolder, MdHome, MdWork } from "react-icons/md";
import { FaCode, FaDatabase, FaJs, FaMapMarkerAlt, FaNodeJs, FaPhoneAlt, FaReact } from "react-icons/fa";
import { MenuOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "education", "project", "skill", "contact"];
      let scrollPos = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    if (currentPath === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // call once on load
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [currentPath]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initialize once

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="heaner-container">
        {/* <div className="nav-container">
          <a href="#home">
            <Flex align="center" justify="space-evenly" className="logo" style={{ padding:'0px 10px'}}>
              <FaCode style={{ fontSize: 24 }} />
              <span style={{fontSize:20 ,fontWeight: 'bold',paddingLeft:8 }}>Portofilo</span>
            </Flex>
          </a>
          <Menu theme="dark" mode="horizontal" className="custom-menu">
            {["home", "experience", "education", "project", "skill", "contact"].map((section) => (
              <Menu.Item key={section}>
                <a
                  href={`#${section}`}
                  className={`menu-link ${activeSection === section ? "active" : ""}`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </Menu.Item>

            ))}
          </Menu>
        </div> */}
        <div className="nav-container">
          <a href="#home">
            <Flex align="center" justify="space-evenly" className="logo" style={{ padding: '0px 10px' }}>
              <FaCode style={{ fontSize: 24 }} />
              <span style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 8 }}>Portofilo</span>
            </Flex>
          </a>

          {isMobile ? (
            <>
              <MenuOutlined
                style={{ fontSize: 24, color: 'black', cursor: "pointer" }}
                onClick={() => setDrawerVisible(true)}
              />
              <Drawer
                title="Navigation"
                placement="right"
                onClose={() => setDrawerVisible(false)}
                open={drawerVisible}
              >
                <Menu mode="vertical" onClick={() => setDrawerVisible(false)}>
                  {["home", "experience", "education", "project", "skill", "contact"].map((section) => (
                    <Menu.Item key={section}>
                      <a
                        href={`#${section}`}
                        className={`menu-link ${activeSection === section ? "active" : ""}`}
                        onClick={() => setActiveSection(section)}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              </Drawer>
            </>
          ) : (
            <Menu theme="dark" mode="horizontal" className="custom-menu">
              {["home", "experience", "education", "project", "skill", "contact"].map((section) => (
                <Menu.Item key={section}>
                  <a
                    href={`#${section}`}
                    className={`menu-link ${activeSection === section ? "active" : ""}`}
                    onClick={() => setActiveSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          )}
        </div>

      </Header>

      <Content style={{ padding: "0 50px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 1400, background: "transparent", minHeight: "100vh" }}>
          <Outlet />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" ,padding: 0 ,margin: 0}}>
        <Flex vertical align="center" style={{background:  '#001529'}}>
          <Flex
            wrap="wrap"
            style={{
              width: '100%',
              maxWidth: 1400,
              margin: '0 auto',
              // background: '#001529',
              color: 'white',
              textAlign: 'start',
              padding: '40px 0px',
              gap: 30,
              rowGap: 40
            }}
          >
            {/* About */}
            <div style={{ flex: '1 1 350px', minWidth:350 }}>
              <h2 style={{ color: '#ffffff',marginBottom:10 }}>Nhorn Lik</h2>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                A passionate Full Stack Developer dedicated to building impactful and scalable web applications with modern technologies.
              </p>
            </div>

            {/* Navigation */}
            <div style={{ flex: '1 1 150px', minWidth: 150  }}>
              <h3 style={{ color: '#ffffff',marginBottom:10  }}>Navigation</h3>
              <ul className="hover-list" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <MdHome /> Home
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <MdWork /> Experience
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <MdFolder /> Project
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MdContactPage /> Contact
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div style={{ flex: '1 1 150px', minWidth: 150 }}>
              <h3 style={{ color: '#ffffff',marginBottom:10 }}>Skills</h3>
              <ul className="hover-list" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <FaReact color="#61DAFB" /> React
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <FaNodeJs color="#8CC84B" /> Node.js
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <FaJs color="#F7DF1E" /> JavaScript
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <FaDatabase color="#4479A1" /> MySQL
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div style={{ flex: '1 1 200px', minWidth: 200 }}>
              <h3 style={{ color: '#ffffff',marginBottom:10  }}>Contact</h3>
                <ul className="hover-list" style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ccc' }}>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <FaPhoneAlt style={{ marginRight: 8 }} /> +855 12345678
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                    <MdEmail style={{ marginRight: 8 }} /> example@gmail.com
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center' }}>
                    <FaMapMarkerAlt style={{ marginRight: 8 }} /> Cheam Cheav, Phnom Penh
                  </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div style={{ flex: '1 1 250px', minWidth: 250 }}>
              <h3 style={{ color: '#ffffff',marginBottom:10  }}>Newsletter</h3>
              <p style={{ color: '#ccc',marginBottom:10 }}>Subscribe to get the latest updates.</p>
              <Input placeholder="Enter your email" style={{ marginBottom: 10 }} />
              <Button type="primary" style={{ marginTop:10 }}>Subscribe</Button>
            </div>
          </Flex>

          <div style={{ width: '100%', maxWidth: 1400, background: 'red', margin: '10px 0' }}>
            <div style={{ height: 1, backgroundColor: '#3C3D37' }} />
          </div>

          <Flex align="center" style={{ fontSize: 14 ,height:40 ,color:'gray'}}>
            © {new Date().getFullYear()} Created by Website
          </Flex>
        </Flex>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
