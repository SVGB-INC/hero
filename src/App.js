import React, {  useState } from "react";
import HeroVideo from "./components/HeroVideo";

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [onplay, setOnplay] = useState(false);
  const [delayTime, setdelayTime] = useState(false);

  const playVideo = () => {
      setOnplay(!onplay);
      setTimeout(() => {
        setdelayTime(true);
      }, 4000);
  }

  return (
    <div className="App">
      {!videoLoaded && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
          }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="hero-video">
        <HeroVideo onLoaded={() => setVideoLoaded(true)} onPlay={onplay} />
        <div className="hero-content">
          {/* <h1>Welcome to My Hero Page</h1>
          <p>This is an example of a hero page with a video background</p> 
          <a href='http://localhost:3000/sign-in.php'><button ><span>Enter </span></button></a>*/}
          {
          !onplay ? (
            <button
              onClick={playVideo}
            >
              <span>Enter </span>
            </button>
          ) : (
            delayTime && (
              <div className="h-100" style={{ marginTop: "300px" }}>
                <div className="text-white">
                  <div className="pt-1 mb-2">
                    <a
                      href="sign-in.php"
                      type="submit"
                      className="btn btn-primary w-100 py-2"
                    >
                      Have an account? Sign in
                    </a>
                  </div>
                  <div className="pt-1 mb-4">
                    <a
                      href="index.php"
                      type="submit"
                      className="btn btn-primary w-100 py-2"
                    >
                      Don't have an account? Sign up
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
