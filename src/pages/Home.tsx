import { useNavigate } from 'react-router-dom'
import '../App.css'
import '../style/Home.css'

function Home() {

    const navigate = useNavigate()
  
    function handleClick(){
        navigate('/newMember')
    }

    return (
    <main className='main-home'>
        <form className='form-home'>
            <label htmlFor="login">Login</label>
            <input name="login" type="text"/>
            <label htmlFor="password" className='defaultSpacing'>Password</label>
            <input name="password" type="text"/>
            <input type="submit" onClick={handleClick}/>
        </form>
    </main>
    )
  }
  
  export default Home