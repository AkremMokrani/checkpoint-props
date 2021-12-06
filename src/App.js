import Profile from './Components/Profile/Profile'
import myPhoto from './Components/Profile/mok.jpg'
import './App.css';
import PropTypes from 'prop-types';

const alertMyInput = name => alert(name);

const App = () => (
  
  <div>
    <Profile
    name="Mokrani Akrem" 
    bio= "taw nahkiw"
    pro= "Batal"
    alertMyInput={alertMyInput}
    >
      {/* child props */}
      <img src= {myPhoto} alt='image' />
    </Profile>
    
    
  </div>
 );

 Profile.propTypes ={
  Fullname: PropTypes.string,
  Bio: PropTypes.string,
  Profession: PropTypes.string,
}


export default App;
