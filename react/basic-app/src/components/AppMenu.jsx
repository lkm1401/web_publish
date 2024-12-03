import Menu from './Menu.jsx';
import MenuList from './MenuList.jsx';

export default function AppMenu() {
    const nameList = [
        { "name": "Home", "href": "#home", "bg": "gray", "color": "white"},
        { "name": "About", "href": "#about", "bg": "tomato" },
        { "name": "Skills", "href": "#skills", "bg": "tomato"},
        { "name": "Mywork", "href": "#mywork", "bg": "tomato"},
        { "name": "Testimonial", "href": "#testimonial", "bg": "tomato"},
        { "name": "Contact", "href": "#contact", "bg": "tomato"},
        { "name": "Support", "href": "#support", "bg": "tomato"},
    ];

    return (
        <>
            <div>
                <Menu name="Home" href="#home" bg="gray" color="white" />
                <Menu name="About" href="#about" bg="tomato"/>
                <Menu name="Skills" href="#skills" bg="tomato"/>
                <Menu name="Mywork" href="#mywork" bg="tomato"/>
                <Menu name="Testimonial" href="#testimonial" bg="tomato" />
                <Menu name="Contact" href="#contact" bg="tomato"/>
                <Menu name="Support" href="#support" bg="tomato"/>
            </div>
            <div>
                <MenuList list={nameList}/>
            </div>
        </>
    );
}