import './App.css'
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

// These are the lists used in the application. You can move them to any component needed.

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

// Replace your code here
class App extends Component {
  state = {
    name: '',
    activeId: topicsList[0].id,
    isSubmittedForm: false,
  }

  onChangeName = eventValue => {
    this.setState({name: eventValue})
  }

  onActiveSelectId = activeSelectId => {
    this.setState({activeId: activeSelectId})
  }

  isFormSubmitted = () => {
    this.setState({isSubmittedForm: true})
  }

  render() {
    const {name, activeId, isSubmittedForm} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          activeId,
          isSubmittedForm,
          onChangeName: this.onChangeName,
          onActiveSelectId: this.onActiveSelectId,
          isFormSubmitted: this.isFormSubmitted,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
