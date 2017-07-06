import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import storybookImg from './assets/storybook.png';
import './assets/presentation.css'

class Welcome extends React.Component {
    render(){
        return (<div style={{margin:"0 auto", width:"567px"}}><img src={storybookImg} /><a style={{display:"block", textAlign:"center"}} target="_blank" href="https://storybook.js.org/examples/">Get Started</a></div>)
    }
}
class AboutStorybook extends React.Component {
    render(){
        return(<div className="about-storybook">
                <h1>About Storybook</h1>
                <ul>
                    <li>Its a UI development environment for your React Components</li>
                    <li>Visualize different states of components</li>
                    <li>Runs outside of your app</li>
                    <li>Helps in developing components without any app specific dependencies and requirements</li>
                    <li>Improves component reuse, testability, development speed</li>
                </ul>
              </div>)
    }
}
class Addons extends React.Component {
    render(){
        return(<div className="addons">
                <h1>Storybook addons</h1>
                <ul>
                    <li> <a href="#">storyshots</a>: StoryShots adds automatic Jest Snapshot Testing for Storybook.</li>
                    <li><a href="#">graphql</a>: Query a GraphQL server within Storybook stories</li>
                    <li><a href="#">specifications</a>: Allows you to write tests based on your stories and display results directly inside storybook.</li>
                    <li><a href="#">actions</a>: Log actions as users interact with components in storybook</li>
                </ul>
              </div>)
    }
}
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Add todos')} />)
                            .add('about storybook', () => <AboutStorybook />)
                            .add('addons', () => <Addons />);

