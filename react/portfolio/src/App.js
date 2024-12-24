import './css/style.css';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Logo from './components/header/Logo.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
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
  const sectionList = [
    {
      "id": "about",
      "title": "About me",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus, temporibus perspiciatis repudiandae nostrum modi doloremque expedita non eius ipsum! Beatae porro adipisci omnis architecto dignissimos. Iusto ipsa inventore adipisci.",
      "children": [
        { "component": "Majors" },
        { "component": "Jobs" }
      ]
    },
    {
      "id": "skill",
      "title": "My Skills",
      "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
      "children": [
        {
          "component": "Skills",
          "children": [
            { "component": "Coding" },
            { "component": "Ariticle", "props": { "type": "Tools" } },
            { "component": "Ariticle", "props": { "type": "Etc" } }
          ]
        }
      ]
    },
    {
      "id": "work",
      "title": "My work",
      "description": "Projects",
      "children": [
        { "component": "Categories" },
        { "component": "Projects" }
      ]
    },
    {
      "id": "testimonial",
      "title": "Testimonial",
      "description": "See what they say about me",
      "children": [
        { "component": "Testimonials" }
      ]
    }
  ];

  const componentMap = {
    Majors,
    Jobs,
    Skills,
    Coding,
    Ariticle,
    Categories,
    Projects,
    Testimonials
  };

  //자식 컴포넌트 렌더링 :: 재귀함수
  const renderComponent = (childObj) => {  
    const Component = componentMap[childObj.component]; 
    if (!Component) return null;

    return (
      <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
        {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
      </Component>
    );
  };
  
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

        {sectionList && sectionList.map((section) => (
          <SectionWrap
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            {section.children.map((child) => renderComponent(child))}

          </SectionWrap>
        ))}   

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
