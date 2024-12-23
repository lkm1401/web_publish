import './css/style.css';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Logo from './components/header/Logo.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
import About from './components/content/About.jsx';
import SectionWrap from './components/content/SectionWrap.jsx';
import Majors from './components/content/Majors.jsx';
import Jobs from './components/content/Jobs.jsx';
import Skills from './components/content/Skills.jsx';
import Coding from './components/content/Coding.jsx';
import Ariticle from './components/content/Ariticle.jsx';
import Categories from './components/content/Categories.jsx';
import Projects from './components/content/Projects.jsx';
import Testimonials from './components/content/Testimonials.jsx';
import Arrow from './components/content/Arrow.jsx';
import Top from './components/footer/Top.jsx';
import ContactLinks from './components/footer/ContactLinks.jsx';
import Bottom from './components/footer/Bottom.jsx';

function App() {
  
  return (
    <>
      <Header>
        <Logo 
          img="images/favicon.ico"  name="Judy"/>
        <MenuList />
        <ToggleButton />
      </Header>
      <Content>
        <Home img="images/favicon.ico" name="Judy"/>

        {/* About me */}
            <SectionWrap
            id="about"
            title="About me"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iure natus, temporibus perspiciatis repudiandae nostrum modi
        doloremque expedita non eius ipsum! Beatae porro adipisci 
        omnis architecto dignissimos. Iusto ipsa inventore adipisci.">
              <Majors />
              <Jobs />
        </SectionWrap>

        {/* My Skills */}
        <SectionWrap
            id="skill"
            title="My Skills"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Nobis beatae, aliquid ratione commodi nam ex voluptate rem 
        eveniet cupiditate optio natus? Cum, harum eum sint id quod 
        nulla adipisci. Sunt?">
              <Skills>
                <Coding />
                <Ariticle type="Tools" />
                <Ariticle type="Etc" />
              </Skills>
        </SectionWrap>

        {/* My Work */}
        <SectionWrap
            id="work"
            title="My work"
            description="Projects"
        >
          <Categories />
          <Projects />
        </SectionWrap>

        {/* Testimonials */}
        <SectionWrap
            id="testimonial"
            title="Testimonial"
            description="See what they say about me"
        >
          <Testimonials />
        </SectionWrap>  

        {/* Arrow up */}
        <Arrow />
      </Content>
      <Footer>
        <Top 
          title="Let's talk"
          description="jeon.developer.judy@gmail.com"
          />
        <ContactLinks />
        <Bottom />
      </Footer>
    </>
  );
}

export default App;
