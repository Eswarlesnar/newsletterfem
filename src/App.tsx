import './App.css'
// import { ReactComponent as Header} from "./assets/illustration-sign-up-mobile.svg"

function App() {

  return (
    <div className='container'>
    <div className='main'>
      <section className='image'>
      </section>
      <div>
        <div className='content'>
          <h1>
            Stay updated!
          </h1>
          <p>Join 600000+ product managers receiving monthly updates on</p>
          <div>
             <div className='item'> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                 <p>Product discovery and building what matters</p>
             </div>
             <div className='item'> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                 <p>Measuring to ensure updates are a success</p>
             </div>
             <div className='item'> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                 <p>And much more</p>
             </div>
          </div>
        </div>
        <form className='form'>
          <label htmlFor='email'>Email Address</label>
          <input type ="email" id="email" required />
          <button>Subscribe to monthly newsletter</button>
        </form>

      </div>
    
    </div>
    </div>
  )
}

export default App
