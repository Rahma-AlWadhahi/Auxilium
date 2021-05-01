import "./LandingPage.css";

import Button from "../smallerComponents/Button";
import LandingNavbar from "../smallerComponents/LandingNavbar";
import BrandLogo from "../smallerComponents/BrandLogo";

import { Link, NavLink, useHistory } from "react-router-dom";

import googlePlayBadge from "../../assets/images/google-play-badge.png";

import hand from "../../assets/images/hand.png";
import boyOnRocket from "../../assets/images/boy-on-rocket.png";
import iconSearchFilled from "../../assets/images/icon-search-filled.svg";
import iconParkingFilled from "../../assets/images/icon-parking-filled.svg";
import yellowDottedPattern from "../../assets/images/yellow-dotted-pattern.svg";
import iconMapPinAddFilled from "../../assets/images/icon-map-pin-add-filled.svg";

import billyCoin from "../../assets/images/billy_coin.png";
import billySafe from "../../assets/images/billy_safe.png";
import billySearch from "../../assets/images/billy_search.png";
import billySecure from "../../assets/images/billy_secure.png";

import iconDiscord from "../../assets/images/icon_discord.png";
import iconGithub from "../../assets/images/icon_github.png";
import iconTwitter from "../../assets/images/icon_twitter.png";
import iconLinkedin from "../../assets/images/icon_linkedin.png";
import iconInstagram from "../../assets/images/icon_instagram.png";

import iconTwitterBlack from "../../assets/images/icon_twitter_black.png";
import iconGithubBlack from "../../assets/images/icon_github_black.png";
import iconDiscordBlack from "../../assets/images/icon_discord_black.png";
import iconLinkedinBlack from "../../assets/images/icon_linkedin_black.png";
import iconInstagramBlack from "../../assets/images/icon_instagram_black.png";

const LandingPage = () => {
  const history = useHistory();

  return (
    <div className="LandingPage">
      <main className="main-container">
        <LandingNavbar />
        <div className="main-a">
          <h1>
            Do good work  <br />
            <span>Safe & Publically</span>
          </h1>
          <p>
            Spark a fire of <span> Creativity, Social awareness, Goodwillness, Helpfulness and Joy </span> in you in middle of this pandamic. 
          </p>
          <div className="main-a-btns">
            <Button
              buttonType="pri-btn"
              handleClick={() => {
                history.push("/signup");
              }}
            >
              Signup
            </Button>
            <Button
              buttonType="sec-btn"
              handleClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
        <div className="main-b">
          <div>
            <p>Trusted By</p>
            <h2>50000</h2>
            <p>Registered Users</p>
          </div>
          <div>
            <p>Registrants From</p>
            <h2>50+</h2>
            <p>Countries</p>
          </div>
          <div>
            <p>Partnered With Over</p>
            <h2>100</h2>
            <p>NGO's</p>
          </div>
          <div>
            <p>Our Users Raised</p>
            <h2>$ 25000+</h2>
            <p>Worth Funds Around The Globe</p>
          </div>
        </div>
      </main>
      <section className="working">
        <img className="floats" src={hand} />
        <img className="floats" src={boyOnRocket} />
        <h1>How it Works</h1>
        <div id="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={iconSearchFilled} />
            </div>
            <div className="timeline-content">
              Login and Click on the tasks section
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={iconMapPinAddFilled} />
            </div>
            <div className="timeline-content right">
              Complete the task and share a selfie with others
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={iconParkingFilled} />
            </div>
            <div className="timeline-content">
              Appriciate other's tasks by liking their selfie & get appriciated as well
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <img className="floats" src={yellowDottedPattern} />
        <img className="floats" src={yellowDottedPattern} />
        <img className="floats" src={yellowDottedPattern} />
        <h1>Why Auxilium</h1>
        <h1>Why Auxilium</h1>
        <div className="features-list">
          <div className="feature">
            <img src={billySearch} />
            <h2>Get noticed</h2>
            <p>complete the tasks and do goodwill & rank on the top leaderboards and get noticed globally</p>
          </div>
          <div className="feature">
            <img src={billySecure} />
            <h2>Safe and Secure</h2>
            <p>No worries of personal data leakage and frauds</p>
          </div>
          <div className="feature">
            <img src={billyCoin} />
            <h2>Earn points</h2>
            <p>Earn points on completing the task and use the points to donate during this pandamic</p>
          </div>
          <div className="feature">
            <img src={billySafe} />
            <h2>Covid-19 protected</h2>
            <p>No need to get out of your homes. You can enjoy this platform from comfort of your home</p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <BrandLogo />
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active" exact>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active" exact>
                Signup
              </NavLink>
            </li>
          </ul>
          <Link className="playstore-badge" to="/playstore">
            <img src={googlePlayBadge} />
          </Link>
        </nav>
        <div className="footer-content">
          <div className="footer-info">
            <h2>About Project</h2>
            <p>
              This Web Application is developed as a DevSoc'21 Hackathon project. We are aiming to solve the problems like the mental health issues faced by people in lockdown.Our aim is to spark a fire of creativity, Social awareness, goodwillness, Helpfulness and joy in them. Our aim also includes indulging some habit amongst the users by the medium of tasks.We are aiming to overcome problems like lonliness, boredom, unable to help, mental and physical health issues amongst the citizens.

              <a href="https://github.com/kaiwalyakoparkar/Auxilium"> this Github Repo</a>.
            </p>
          </div>
          <div className="contact">
            <h2>Contact Me</h2>
            <p>
              If you have a nice story to tell, mail us at
              <a href="#"> contact@teaminfinity.com</a> or you
              can connect with us on below platforms.
            </p>
            <div className="contact-links">
              <a href="https://github.com/kaiwalyakoparkar/Auxilium">
                <img src={iconGithubBlack} />
                <img src={iconGithub} />
              </a>
              <a href="#">
                <img src={iconLinkedinBlack} />
                <img src={iconLinkedin} />
              </a>
              <a href="#">
                <img src={iconTwitterBlack} />
                <img src={iconTwitter} />
              </a>
              <a href="#">
                <img src={iconInstagramBlack} />
                <img src={iconInstagram} />
              </a>
              <a href="#">
                <img src={iconDiscordBlack} />
                <img src={iconDiscord} />
              </a>
            </div>
          </div>
        </div>
        <p>
          Developed with ❤️ by <span>Team Infinity</span>.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
