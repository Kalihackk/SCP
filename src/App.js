import "./App.css";
import "./regForm.css";

function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <form class="form" autocomplete="off">
          <div class="control">
            <h1>Sign In</h1>
          </div>
          <div class="control block-cube block-input">
            <input name="username" type="text" placeholder="Username" />
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
          </div>
          <div class="control block-cube block-input">
            <input name="password" type="password" placeholder="Password" />
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
          </div>
          <button class="btn block-cube block-cube-hover" type="button">
            <div class="bg-top">
              <div class="bg-inner"></div>
            </div>
            <div class="bg-right">
              <div class="bg-inner"></div>
            </div>
            <div class="bg">
              <div class="bg-inner"></div>
            </div>
            <div class="text">Log In</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
