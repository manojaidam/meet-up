import {
  RegisterContainer,
  HeaderContainer,
  WebsiteLogo,
  RegisterImageContainer,
  ImageElement,
  LoginContainer,
  HeadingElement,
  FormContainer,
  InputNameContainer,
  LabelElement,
  InputElement,
  InputTopicsContainer,
  InputSelectElement,
  OptionElement,
  RegisterButtonElement,
} from './styledComponents'
import MeetupContext from '../../context/MeetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        onActiveSelectId,
        onChangeName,
        name,
        activeId,
        isFormSubmitted,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()
        isFormSubmitted()
        const {history} = props
        history.replace('/')
      }
      const onChangeNameElement = event => {
        onChangeName(event.target.value)
      }

      const onChangeActiveId = event => {
        onActiveSelectId(event.target.value)
      }

      return (
        <RegisterContainer>
          <HeaderContainer>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </HeaderContainer>
          <RegisterImageContainer>
            <ImageElement
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <LoginContainer>
              <HeadingElement>Let us join</HeadingElement>
              <FormContainer onSubmit={onSubmitForm}>
                <InputNameContainer>
                  <LabelElement htmlFor="Name">NAME</LabelElement>
                  <InputElement
                    id="Name"
                    value={name}
                    type="text"
                    placeholder="Your Name"
                    onChange={onChangeNameElement}
                  />
                </InputNameContainer>
                <InputTopicsContainer>
                  <LabelElement htmlFor="Topics">Topics</LabelElement>
                  <InputSelectElement
                    id="Topics"
                    value={activeId}
                    onChange={onChangeActiveId}
                  >
                    {topicsList.map(each => {
                      const {id, displayText} = each
                      return (
                        <OptionElement key={id} value={id}>
                          {displayText}
                        </OptionElement>
                      )
                    })}
                  </InputSelectElement>
                </InputTopicsContainer>
                <RegisterButtonElement type="submit">
                  Register Now
                </RegisterButtonElement>
              </FormContainer>
            </LoginContainer>
          </RegisterImageContainer>
        </RegisterContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
