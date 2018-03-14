// Library imports
import React, { Component } from 'react';

// Relative Imports
import { Container, Presenter, Body, Phone, Panel, Section } from './styles';
import SectionHeader from '../../_misc/section-header';
import iPhone from '../../../assets/img/phone.png';
import { Paragraph, Title } from '../../../constants/type.js';

class Features extends Component {
  render() {
    return (
      <Container>
        <SectionHeader title="Receipt Coin Features" />
        <Presenter>
          <Body>
            <Panel>
              <Section>
                <Title>Save time</Title>
                <Paragraph>
                  Every time we sell a product the images, description and meta
                  data for that product are lost forever. With our files and
                  products the data survives. This means less photoshoots,
                  looking for lost manuals, and trying to write catchy
                  descriptions for selling your things. This data travels with
                  the product from manufacturer to reseller to customer to customer and so on.
                </Paragraph>
              </Section>
              <Section>
                <Title>Organization</Title>
                <Paragraph>
                  ReceiptCoin is also making an app
                  for you to trade, sell, and lend your own items using your
                  convenient receipt files to keep track of everything. Then you
                  have the interface for business allowing your company to
                  create personal receipts and display them to your customers
                  either in your app or ours.
                </Paragraph>
              </Section>
              <Section>
                <Title>Create digital Assets</Title>
                <Paragraph>
                  ReceiptCoin helps consumers and businesses create digital
                  assets that survive sale and trading. These assets represent
                  the digital identity of an object and can be used
                  interoperably between parties or internally to track and
                  accumulate historical records of objects such as location and
                  owner.
                </Paragraph>
              </Section>
            </Panel>
            <Phone src={iPhone} />
          </Body>
        </Presenter>
      </Container>
    );
  }
}

export default Features;
