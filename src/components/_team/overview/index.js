// Library imports
import React, { Component } from 'react';

// Relative Imports
import {
  Container,
  Card,
  Avatar,
  Name,
  Position,
  Description,
  Row,
  Wrapper
} from './styles';
import { Body } from '../../../constants/layout';
import { Heading } from '../../../constants/type.js';
import Austin from '../../../assets/team/austin_cropped.png';
import Jiensen from '../../../assets/team/jiensen_cropped.png';
import Jordan from '../../../assets/team/jordan_cropped.png';
import Joseph from '../../../assets/team/joseph_cropped.png';
import Matt from '../../../assets/team/matt_cropped.png';
import Nick from '../../../assets/team/nick_cropped.png';
import Phillip from '../../../assets/team/phillip_cropped.png';
import Ted from '../../../assets/team/teddy_cropped.png';
import Randall from '../../../assets/team/randall_cropped.png';
import Mike from '../../../assets/team/mike_cropped.png';

class Overview extends Component {
  render() {
    return (
      <Wrapper>
        <Body>
          <Row>
            <Heading>Management</Heading>
          </Row>
          <Container>
            <Card>
              <Avatar src={Nick} />
              <Name>Nicholas Juntilla</Name>
              <Position>Co-founder, Developer, and CEO</Position>
              <Description>
                a software engineer for 20+ years. 15 of those years have been
                in medium to large corporations in Los Angeles. N.J. has
                designed and built eCommerce platforms, social network sites,
                eBook publishing software, robotics, interactive media, art
                installations, and accounting software for companies like Sony
                Interactive, Disney Store, Beachbody, Ubiquity, Trailer Park
                Pub., and Chromeriver Inc.. For over a decade he has been
                working with Inventory, eCommerce and ERP management.
              </Description>
            </Card>
            <Card>
              <Avatar src={Joseph} />
              <Name>Joseph Schmitt</Name>
              <Position>Co-founder and CFO</Position>
              <Description>
                has spent the past 20 years working in various levels of
                finance, audit, logistics and supply chain management. Vice
                President of Finance for Los Angeles VA Healthcare System,
                Joseph leads a team of 35 financial professionals responsible
                for execution of $1 billion in annual revenues. He holds an MBA,
                is a Certified Internal Auditor and served in the US Navy.
              </Description>
            </Card>
            <Card>
              <Avatar src={Jiensen} />
              <Name>Jiansen Huang</Name>
              <Position>Marketing Strategist</Position>
              <Description>
                received his film master degree from USC, is a creative director
                and also blockchain entrepreneur. He has worked in the retail
                and logistic industry and now owns his own bussiness in
                logistics. During his bussiness practice, he gained more than
                1000 clients and helped them build their import and export
                business. Jiansen has practical experience in team management,
                strategic planning and business integration. Jiansen Huang has a
                deep understanding in cryptography and is an early stage
                investor of Ethereum. With his Chinese background, he will
                integrate Asia and US ReceiptCoin communities.
              </Description>
            </Card>
            <Card>
              <Avatar src={Randall} />
              <Name>Randall Mills</Name>
              <Position>PR and New Media, RJ Mills</Position>
              <Description>
                is director of (social) media with decades of experience in
                journalism, photography, video production, content creation,
                fine art, entertainment, event planning in the heart of Los
                Angeles.
              </Description>
            </Card>
            <Card>
              <Avatar src={Mike} />
              <Name>Michael Goode</Name>
              <Position>Developer</Position>
              <Description>
                is a former lawyer that believes blockchain will change
                industries. He earned his finance degree from Virginia Tech and
                his law degree from Howard University School of Law. Since
                moving from Washington D.C., Michael has become a full-stack web
                developer.
              </Description>
            </Card>
          </Container>
        </Body>

        {/* Advisors */}
        <Body>
          <Row>
            <Heading>Advisors</Heading>
          </Row>
          <Container>
            <Card>
              <Avatar src={Austin} />
              <Name>Austin Davis</Name>
              <Position>Advisor</Position>
              <Description>
                is Co-Founder & CEO of BNFT - BenefitWith.us, Blockchain Think
                Tank - specializing in R&D, product development, consulting and
                education in the blockchain space. He is also the director of
                strategic partnerships for GWP (Great Work Perks), creating
                mutually beneficial corporate partnerships from the ground up.
                Austin founded ‘Blockchain Beach’ crypto events in Los Angeles -
                bringing blockchain entrepreneurs together for events,
                networking, strategy and team building experiences (in
                partnership with WeWork). Austin is co-hosting the Hyperledger
                Foundation meetup(s) in LA and facilitating early stage
                development partnerships with ConsenSys.
              </Description>
            </Card>
            <Card>
              <Avatar src={Ted} />
              <Name>Ted Saunders</Name>
              <Position>Advisor</Position>
              <Description>
                is a creative executive and media producer with a background
                producing television shows (FOX, NBC Universal and HBO) and
                technology marketing (Salesforce.com, Glint, Inc. Toyota) With a
                diverse crypto portfolio, Teddy sees the value of the blockchain
                and has grand visions for its use, both in the companies that he
                advises as well as his own entrepreneurial endeavors.
              </Description>
            </Card>

            <Card>
              <Avatar src={Jordan} />
              <Name>Jordan Lyall</Name>
              <Position>Advisor</Position>
              <Description>
                Jordan Lyall is a serial technology entrepreneur and early
                crypto-investor. He is obsessed with building world-class
                products with great design and user experience. Currently an
                active advisor to early blockchain projects. Prior he was
                co-founder and head of product for HelloSanta which was acquired
                by JibJab.
              </Description>
            </Card>
            <Card>
              <Avatar src={Phillip} />
              <Name>Phillip Braham</Name>
              <Position>Advisor</Position>
              <Description>
                holds a B.S. in biology, a J.D., and an LL.M. in intellectual
                property law. He has sales/marketing and consulting experience
                in the tech industry. He has spent the past 4 years as an M↦A
                consultant, and worked on numerous transactions in the
                technology sector.
              </Description>
            </Card>
            <Card>
              <Avatar src={Matt} />
              <Name>Matt Rogers</Name>
              <Position>Advisor</Position>
              <Description>
                is Co-Founder & CPO of BNFT - BenefitWith.us
              </Description>
            </Card>
          </Container>
        </Body>
      </Wrapper>
    );
  }
}

export default Overview;
