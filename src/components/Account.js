import React, { useState } from 'react'
import { Button, Grid, Header, Icon, Input, Segment } from 'semantic-ui-react'
import { useSelector, useDispatch} from "react-redux"
import { decrement, increment } from '../redux/actions'

export default function Account(props) {
  const amount = useSelector((state)=> state[props.id])
  const dispatch = useDispatch();
  const [value, setValue] = useState("0")
  
  
  const handlePlus = () =>{
      const newNumber = parseInt(value, 10)
      dispatch(increment(newNumber, props.id))
  }

  const handleMinus = () =>{
    const newNumber = parseInt(value, 10)
    dispatch(decrement(newNumber, props.id))
}
  
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" textAlign="center">{props.title}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Header size="huge" color="blue">${amount}</Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Button icon onClick={handleMinus}>
                    <Icon name="minus" />
                  </Button>
                  <Input type="number" step="1" pattern="" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
                  <Button icon onClick={handlePlus}>
                    <Icon name="plus" />
                  </Button>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}