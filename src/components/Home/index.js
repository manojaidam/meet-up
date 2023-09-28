import {Link} from 'react-router-dom'
import {
  HomeContainer,
  ResponsiveContainer,
  RegisterContainer,
  MainHeadingElement,
  ParagraphElement,
  CustomButton,
  HomeImageContainer,
} from './styledComponents'
import MeetupContext from '../../context/MeetupContext'

const Home = props => {
  const onClickRegisterButton = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <MeetupContext.Consumer>
      {value => {
        const {isSubmittedForm, name, activeId} = value
        return (
          <HomeContainer>
            <ResponsiveContainer>
              <RegisterContainer>
                <MainHeadingElement>
                  {isSubmittedForm ? `Hello ${name}` : 'Welcome to Meetup'}
                </MainHeadingElement>
                <ParagraphElement>
                  {isSubmittedForm
                    ? `Welcome to ${activeId}`
                    : 'Please register for the topic'}
                </ParagraphElement>
                {!isSubmittedForm && (
                  <Link to="/register">
                    <CustomButton onClick={onClickRegisterButton} type="button">
                      Register
                    </CustomButton>
                  </Link>
                )}
              </RegisterContainer>
              <HomeImageContainer
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </ResponsiveContainer>
          </HomeContainer>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Home
