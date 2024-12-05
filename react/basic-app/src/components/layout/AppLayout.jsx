import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import AvatarImage from '../AvatarImage.jsx';
import AvatarList from '../AvatarList.jsx';
import Button from '../Button.jsx';
import Menu from '../Menu.jsx';
import ButtonList from '../ButtonList.jsx';

export default function AppLayout() {
    const avatarList = [
        {"img": "/images/people1.webp", "name": "smith" },
        {"img": "/images/people2.webp", "name": "james" },
        {"img": "/images/people3.webp", "name": "kelly" },
    ];

    const buttonList = [
        {"name":"회원가입", "type":"button"},
        {"name":"Support", "type":"button"},
        {"name":"Mypage", "type":"button"},
    ];

    return (
        <>
            <Header>
                <AvatarImage img = "/images/people1.webp" />
                <Button name="Login" type="button" />
                <Menu name="Home" href="#home" bg="gray" color="white" />
            </Header>
            <Body>
                <AvatarList list={avatarList} />
            </Body>
            <Footer>
                <ButtonList list={buttonList} />
            </Footer>
        </>
    );
}
