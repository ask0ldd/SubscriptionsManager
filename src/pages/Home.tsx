import '../App.css'
import '../style/Home.css'

function Home() {
  
    return (
    <main className='main-home'>
        <form className='form-home'>
            <label htmlFor="login">Login</label>
            <input name="login" type="text"/>
            <label htmlFor="password" className='defaultSpacing'>Password</label>
            <input name="password" type="text"/>
            <input type="submit"/>
        </form>
    </main>
    )
  }
  
  export default Home