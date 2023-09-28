import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  activeId: '',
  isSubmittedForm: false,
  onChangeName: () => {},
  onActiveSelectId: () => {},
  isFormSubmitted: () => {},
})

export default MeetupContext
