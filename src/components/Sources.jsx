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
          <hr />
        </div>
      </div>
      <div className="sourceAllMain">
        <div className="sourceAll">
          <h3>Actual links</h3>
          <ul style={{ marginTop: "1%" }}>
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
            <li></li>
            <li></li>
            <h4>donate websites:</h4>
            <li>
              Finance and Volunteer help{" "}
              <a href="https://prayforkyrgyzstan.org">prayforkyrgyzstan.org</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sources;
