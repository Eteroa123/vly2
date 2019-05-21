import TitleSectionSub from '../HeroPage/TitleSectionSub'
import styled from 'styled-components'
import { Button } from 'antd';

const TripleGrid = styled.div`
  display: grid;
  grid-template-columns: 25rem 25rem 25rem;
  grid-gap: 2.5rem;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, 25rem);
    justify-content: start;
    justify-items: center;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100vw;
    grid-gap: 0rem;
  }
`

// cardcontainer
const CTAContainer = styled.div`
width: 25rem;
`

// cardimg
const CTAImage = styled.img`
  width: 100%;
  height: 10rem;
  background-color: black;
  object-fit: cover;
  object-position: center;
`
// cardtitle
const CTATitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  letter-spacing: -0.8px;
  line-height: 40px;
  margin-bottom: 0;
`
// cardabout
const CTADescription = styled.h1`
  font-size: 1rem;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: -0.3px;
`


const AboutCTA = () => (
  <div>
    <TitleSectionSub title='How to get involved' />
    <TripleGrid>
    <CTAContainer>
      <CTAImage src='' />
      <CTATitle>Developers</CTATitle>
      <CTADescription>
        Keen to join the build of the platform? Find us on Github and Gitter.
        All skill levels are welcome.
      </CTADescription>
      <Button>Dev Chatroom</Button>
      <Button> Github Repository</Button>

    </CTAContainer>
    <CTAContainer>
      <CTAImage src='' />
      <CTATitle>Volunteers</CTATitle>
      <CTADescription>
        We're looking for volunteers of all types to help manage the system - If you’re keen to get involved in volunteer operations, join the channel on gitter
      </CTADescription>
      <Button>Volunteer Operations Chatroom</Button>
    </CTAContainer>
    <CTAContainer>
      <CTAImage src='' />
      <CTATitle>Sponsors</CTATitle>
      <CTADescription>
      Donations and long term support help speed up the development of the voluntarily platform and be more effective in the lives of young Kiwis.
      </CTADescription>
      <Button>Donate</Button>
    </CTAContainer>
    </TripleGrid>
  </div>
)

export default AboutCTA