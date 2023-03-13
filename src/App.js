//import './App.css';
import { ProfilePicture } from './components/profilePicture';
import { Header } from './components/header';


export const App = () => {
  return (
    <div className='app object-cover w-full'>
      <Header />
      <ProfilePicture />
    </div>
  )
}


