import "../styles/home.css";
import "tailwindcss/tailwind.css";

function Home() {
  return (
    <div className="home-main">
      <div className="title-box">
        <div>
          <img src="\public\logo.png" alt="" class="center"></img>
        </div>
      </div>
      <form>
      <textarea placeholder="Paste your text here ..." class="output-box"></textarea>
      </form>

      <div className="footer-div"></div>
    </div>
  );
}

export default Home;
