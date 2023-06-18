import '../App.css'

function Home() {
  
    return (
    <main>
        <form>
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