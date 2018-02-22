// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Form, Header, Title, Subtitle, Body, Footer, Submit } from './styles';

const displayNone = {
  display:'none'
}

const offScreen = {
  position: 'absolute',
  left: '-5000px'
}

class Auth extends Component {
  render() {
    const { title, subtitle, children, onSubmit } = this.props;
    return (
      <Form onSubmit={onSubmit} method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" action="https://receiptcoin.us17.list-manage.com/subscribe/post?u=03453efd479e6040f4a2382b5&amp;id=dbd9ceec0f">
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <Submit type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Submit</Submit>
        </Footer>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style={displayNone}></div>
          <div class="response" id="mce-success-response" style={displayNone}></div>
          </div>
          <div style={offScreen} aria-hidden="true"><input type="text" name="b_03453efd479e6040f4a2382b5_dbd9ceec0f" tabindex="-1" value="" /></div>
      </Form>
    );
  }
}

export default Auth;
