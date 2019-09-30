import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EventForm from './EventForm';
import EventList from './EventList';

const MainNavigator = createStackNavigator({
  list: { 
    screen: EventList, 
    navigationOptions: () =>
    ({
      title: 'Your Events'
    })
  },
  form: { 
    screen: EventForm, 
    navigationOptions: () =>
    ({
      title: 'Add an event'
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;