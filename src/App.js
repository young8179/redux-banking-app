import React from "react"
import { Container, Grid, Header, Segment } from 'semantic-ui-react';
import './App.css';
import Account from './components/Account';

function App() {
  return (
    <Container>
      <Segment textAlign="center" vertical >
        <Header as="h1" textAlign="center">Smells Fargo</Header>
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column>
              <Account title="Checking" id="checking"/>
            </Grid.Column>
            <Grid.Column>
            <Account title="Savings" id="savings"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
      </Segment>

    </Container>
  );
}

export default App;
