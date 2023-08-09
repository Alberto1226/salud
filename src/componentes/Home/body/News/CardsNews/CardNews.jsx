import './CardNews.css';

import img1 from "../../../../../assets/img/cards/doc1.png";
import img2 from "../../../../../assets/img/cards/doc2.png";
export function CardsNews() {
  return (
    <>
      <div className="content-wrapper2">
        
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src={img1}
            alt
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Amazing First Title</h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur nemo tempore repellat? Ullam sed officia iure
                architecto deserunt distinctio, pariatur…
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src={img2}
            alt
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">
              Amazing Second Title that is Quite Long
            </h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                obcaecati ex natus nulla rem sequi laborum quod fugit…
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src={img1}
            alt
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Amazing Title</h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis beatae…
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src={img2}
            alt
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">
              Amazing Forth Title that is Quite Long
            </h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">Lorem ipsum dolor sit amet!</p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src={img1}
            alt
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">Amazing Fifth Title</h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur nemo tempore repellat? Ullam sed officia iure
                architecto deserunt distinctio…
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="news-card">
          <a href="#" className="news-card__card-link" />
          <img
            src={img2}
            alt
            className="news-card__image"
          />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">
              Amazing 6<sup>th</sup> Title
            </h2>
            <div className="news-card__post-date">Jan 29, 2018</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                pariatur nemo tempore repellat? Ullam sed officia.
              </p>
              <a href="#" className="news-card__read-more">
                Read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
