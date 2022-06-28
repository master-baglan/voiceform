import './App.css';
import logo from './img/logo.png'
function App() {
  return (
    <div>
      <div className='header'>
          <div className='logo'><img src = {logo} alt = 'logo my'/></div>
          <div className='formTitle'> Form name</div>
      </div>
      
      <div className ='body'>
        <div className='questionContainer'>
          <div className='question'> </div>
          <div className='answer'> </div>
        </div>
        <br></br>
         <div className ='addButton'> 
             <i class="fa-solid fa-plus fa-2xl"/>
         </div>
      </div>
    </div>
 
  );
}

export default App;
