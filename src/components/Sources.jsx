import React from "react";
import "./Styles/Sources.css";

const Sources = () => {
  return (
    <div className="sourceMain">
      <div className="reportsMain">
        <div className="reports">
          <p>Our reports you can check in Telegram channel</p>
          <a href="https://t.me/helplyrgyzstan">
            <button>TG channel</button>
          </a>
        </div>
      </div>
      <div className="sourceAllMain">
        <div className="sourceAll">
          <h3>Actual links</h3>
          <ul style={{ marginTop: "1%" }}>
            {/* <h4>donate websites:</h4> */}
            <li>
              Finance and Volunteer help{" "}
              <a href="https://prayforkyrgyzstan.org">prayforkyrgyzstan.org</a>
            </li>
            <li>
              Batken channels{" "}
              <a href="https://instagram.com/batkenge_jardam?igshid=YmMyMTA2M2Y=">
                https://instagram.com/batkenge_jardam?igshid=YmMyMTA2M2Y=
              </a>
              <br />
            </li>
            <a href="https://t.me/batkengejardam2022">
              https://t.me/batkengejardam2022
            </a>
            <h4>news: </h4>
            <li>
              Kloop Media{" "}
              <a href="https://kloop.kg/blog/category/cap-english/">
                https://kloop.kg/blog/category/cap-english/
              </a>
            </li>
            <li>
              Bashtan bashta{" "}
              <a href="https://www.instagram.com/bashtan_bashta/">
                https://www.instagram.com/bashtan_bashta
              </a>
            </li>
            <li>
              Factcheck.kg{" "}
              <a href="https://instagram.com/factcheck.kg?igshid=YmMyMTA2M2Y=">
                https://instagram.com/factcheck.kg?igshid=YmMyMTA2M2Y=
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sources;
