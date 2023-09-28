import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundParagraph,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundParagraph>Page Not Found</NotFoundParagraph>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found
    </NotFoundDescription>
  </NotFoundContainer>
)

export default NotFound
