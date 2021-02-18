import './style/App.css';
import boys from './image/2boys.png';
function App() {
  const toggle = () => {
    document.getElementById('container').classList.toggle('sign-in')
    document.getElementById('container').classList.toggle('sign-up')
  };
  setTimeout(() => {
    document.getElementById('container').classList.add('sign-in')
  }, 200)
  return (
    <div className="App">
      <div id="container" className="container">
        {/* Form section */}
        <div className="row">
          {/* SIGN UP */}
          <div className="col col__one sign-up">
            <div className="form-wrapper">
              <div className="form sign-up">
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className='bx bx-mail-send'></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt' ></i>
                  <input type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt' ></i>
                  <input type="password" placeholder="Confirm password" />
                </div>
                <button className="form__button">
                  Sign up
                </button>
                <p>
                  <span>
                    Already have an account?
                  </span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper">
              <div className="social-list sign-up">
                <div className="icon icon__fb">
                  <i className='bx bxl-facebook' ></i>
                </div>
                <div className="icon icon__yt">
                  <i className='bx bxl-youtube' ></i>
                </div>
                <div className="icon icon__in">
                  <i className='bx bxl-instagram-alt' ></i>
                </div>
              </div>
            </div>
          </div>
          {/*END SIGN UP */}
          {/* SIGN IN */}
          <div className="col col__two sign-in">
            <div className="form-wrapper">
              <div className="form sign-in">
                <div className="input-group">
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className='bx bxs-lock-alt' ></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button className="form__button">
                  Sign in
                </button>
                <p>
                  <b>
                    Forgot Password
                  </b>
                </p>
                <p>
                  <span>
                    Don't have an account?
                  </span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
            <div className="form-wrapper">
              <div className="social-list sign-in">
                <div className="icon icon__fb">
                  <i className='bx bxl-facebook' ></i>
                </div>
                <div className="icon icon__yt">
                  <i className='bx bxl-youtube' ></i>
                </div>
                <div className="icon icon__in">
                  <i className='bx bxl-instagram-alt' ></i>
                </div>
              </div>
            </div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/*END  Form section */}
        {/* Content section*/}
        <div className="row content-row">
          {/* SIGN IN CONTENT */}
          <div className="col col__one ">
            <div className="text sign-in">
              <h2>
                Welcome back
            </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati, accusantium
                molestias, laborum, aspernatur deserunt officia voluptatum tempora dicta quo ab ullam. Assumenda
                enim harum minima possimus dignissimos deserunt rem.
            </p>
              <div className="img sign-in">
                <img src={boys} />
              </div>
            </div>

          </div>
          {/* END SIGN IN CONTENT */}
          {/* SIGN UP CONTENT */}
          <div className="col col__two ">
            <div className="img sign-up">
              <img src={boys} />
            </div>
            <div className="text sign-up">
              <h2>
                Join with us
            </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit obcaecati, accusantium
                molestias, laborum, aspernatur deserunt officia voluptatum tempora dicta quo ab ullam. Assumenda
                enim harum minima possimus dignissimos deserunt rem.
            </p>
            </div>

          </div>
          {/* END SIGN UP CONTENT */}
        </div>
        {/* END Conten section */}
      </div>

    </div>
  );
}

export default App;
