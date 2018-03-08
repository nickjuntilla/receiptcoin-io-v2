// Library imports
import React, { Component } from 'react';

// Relative Imports
import {
  Container,
  Brand,
  Company,
  Icon,
  Button,
  ButtonContainer,
  Item,
  Hamburger,
  Menu,
  Row
} from './styles';
import menu from '../../../assets/icons/menu.svg';
import Mobile from '../mobile';
import Logo from '../../../assets/icons/receipt-coin-icon-one.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenu: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      mobileMenu: !prevState.mobileMenu
    }));
  };

  render() {
    return (
      <Container>
        <Row>
          <Brand to="/">
            <Icon src={Logo} />
            <Company>ReceiptCoin</Company>
          </Brand>
          <ButtonContainer>
            <Item to="/">Home</Item>
            <Item to="/whitepaper">Whitepaper</Item>
            <Item to="/team">Team</Item>
            <Item to="/faq">F.A.Q</Item>

            <Button to="/register">Register to Buy</Button>
          </ButtonContainer>

          <Hamburger onClick={this.toggleMenu}>
            <Menu src={menu} />
          </Hamburger>
        </Row>
        {this.state.mobileMenu && <Mobile onClick={this.toggleMenu} />}
      </Container>
    );
  }
}

export default Header;
