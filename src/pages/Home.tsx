import '../App.css'

function Home() {
  
    return (
        <form>
        <label>Login</label>
        <input type="text"/>
        <label className='defaultSpacing'>Password</label>
        <input type="text"/>
        <input type="submit"/>
      </form>
    )
  }
  
  export default Home