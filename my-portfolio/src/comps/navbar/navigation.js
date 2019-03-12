import { Nav } from 'react-bootstrap';
import './navigation.css';

export class Navigation extends Compoment {
    render() {
        return (
            <Nav
                activeKey="/"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link variant="pills" href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link variant="pills" href="/port" eventKey="link-1">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link variant="pills" href="/blog" eventKey="link-2">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link variant="pills" href="/contact" eventKey="link-3">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}




