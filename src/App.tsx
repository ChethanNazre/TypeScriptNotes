
import './App.css';
// import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext';
import {Box} from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import Counter from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generic/List';
import { RandomNumber } from './components/restriction/RandomNumber';

function App() {
//   const nameList = [
//     {
//       first: 'Bruce',
//       last: 'Wayne'

//     },
//     {
//       first: 'Clark',
//       last: 'Kent'
//     },
//     {
//       first: 'Princess',
//       last: 'Diana'
//     }
// ]
  return (
    <div className="App">

      <RandomNumber value = {10} isPositive = {true}/>

      {/* <List 
      items ={['Item 1', 'Item 2', 'Item 3']}
      onClick={(item) => console.log(item)}
      />
      <List 
      items = {[1, 2, 3]}
      onClick={(item) => console.log(item)}
      /> */}


   {/* <List items ={[ 
    {
      first: 'Bruce',
      last: 'Wayne'

    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
     }
    
 ]
}
      onClick={(item) => console.log(item)}
      /> */}
      
      {/* <Greet name= 'CNazre'
      
      isLoggedIn={true}/>  */}
      {/* <Person name={{ fname: 'CPT', lname: 'Buzzkill' }}/>
      <PersonList names = {nameList}/>  */}
      
      {/* <Status status = 'error'/>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}

      {/* <Input value ='' handleChange={event=> console.log(event)}/>

      <Button handleClick = 
      {(event, id) => console.log('Button Clicked', event, id)}/>

      <Container styles = { { border:'1px solid black',  padding: '1rem'}} /> */}

      
{/* 
      <Heading>Placeholder Text</Heading>
      <Oscar><Heading>Oscar goes to Dicaprio</Heading></Oscar> */}

      
      {/* <Private isLoggedIn={true} component={Profile}/> */}

      {/* <Counter message='the count value is '/> */}

      {/* <UserContextProvider>
      <User/>
      </UserContextProvider> */}
      

      {/* <Status status = 'error'/>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}


{/* 
      <Input value ='' handleChange={event=> console.log(event)}/>

      <Button handleClick = 
      {(event, id) => console.log('Button Clicked', event, id)}/>

      <Container styles = { { border:'1px solid black',  padding: '1rem'}} />

      {/* <Heading>Placeholder Text</Heading>
      <Oscar><Heading>Oscar goes to Dicaprio</Heading></Oscar>


       <Greet name= 'CNazre'
      
      isLoggedIn={true}/>  */}
      {/* <Person name={{ fname: 'CPT', lname: 'Buzzkill' }}/>
      {/* <PersonList names = {nameList}/>  */}
    </div>
  ); 
}

export default App;


