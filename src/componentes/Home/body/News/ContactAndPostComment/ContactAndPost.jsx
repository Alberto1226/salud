export function ContactAndPosrt() {
  return (
    <>
      <section id="posts-comments">
        <div className="flex">
          <div className="game-warrior">
            {/**logo */}
            <img src="https://onclickwebdesign.com/wp-content/uploads/footer_logo.png" />
           

            <div className="container">
              <div className="row">
                
                <form
                  role="form"
                  id="feedbackForm"
                  data-toggle="validator"
                  data-disable="false"
                >
                  <div className="form-group">
                    <label className="control-label" htmlFor="name">
                      Nombre <span>*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        required
                      />
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                      </span>
                    </div>
                    <span className="help-block" style={{ display: "none" }}>
                      Nombre.
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="email">
                      Razon de contacto <span>*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="razon"
                        name="razon"
                        placeholder="Razon de contacto"
                        required
                      />
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="email"
                        required
                      />
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                      </span>
                    </div>
                    <span className="help-block" style={{ display: "none" }}>
                      Please enter a valid e-mail address.
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="message">
                      Mensaje <span>*</span>
                    </label>
                    <div className="input-group">
                      <textarea
                        rows={1}
                        cols={30}
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Mensaje"
                        required
                        defaultValue={""}
                      />
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-unchecked form-control-feedback" />
                      </span>
                    </div>
                    <span className="help-block" style={{ display: "none" }}>
                      Please enter a message.
                    </span>
                  </div>
                  <div className="form-group">
                    <div className="g-recaptcha" data-sitekey="your_site_key" />
                    <span className="help-block" style={{ display: "none" }}>
                      Please check that you are not a robot.
                    </span>
                  </div>
                  <span className="help-block" style={{ display: "none" }}>
                    Please enter a the security code.
                  </span>
                  <button
                    type="submit"
                    id="feedbackSubmit"
                    className="btn btn-primary btn-lg"
                    data-loading-text="Sending..."
                    style={{ display: "block", marginTop: 10 }}
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="posts-comments-box">
            <h3>Latest Posts</h3>
            <div className="post-item">
              <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_1.jpg" />
              <div>
                <h5>June 21, 2019</h5>
                <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                <small>By: Admin</small>
              </div>
            </div>
            <div className="post-item">
              <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_2.jpg" />
              <div>
                <h5>June 21, 2019</h5>
                <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                <small>By: Admin</small>
              </div>
            </div>
            <div className="post-item">
              <img src="https://onclickwebdesign.com/wp-content/uploads/latest_posts_3.jpg" />
              <div>
                <h5>June 21, 2019</h5>
                <p>Lorem ipsum dolor sit amet, consectectur adipiscing.</p>
                <small>By: Admin</small>
              </div>
            </div>
          </div>
          <div className="posts-comments-box">
            <h3>Top Comments</h3>
            <div className="comments-item">
              <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_1.jpg" />
              <div>
                <p>
                  <span className="author">James Smith</span> <span>on</span>{" "}
                  Lorem ipsum dolor sit amet consectectur.
                </p>
                <h5>June 21, 2019</h5>
              </div>
            </div>
            <div className="comments-item">
              <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_2.jpg" />
              <div>
                <p>
                  <span className="author">James Smith</span> <span>on</span>{" "}
                  Lorem ipsum dolor sit amet consectectur.
                </p>
                <h5>June 21, 2019</h5>
              </div>
            </div>
            <div className="comments-item">
              <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_3.jpg" />
              <div>
                <p>
                  <span className="author">James Smith</span> <span>on</span>{" "}
                  Lorem ipsum dolor sit amet consectectur.
                </p>
                <h5>June 21, 2019</h5>
              </div>
            </div>
            <div className="comments-item">
              <img src="https://onclickwebdesign.com/wp-content/uploads/top_comments_4.jpg" />
              <div>
                <p>
                  <span className="author">James Smith</span> <span>on</span>{" "}
                  Lorem ipsum dolor sit amet consectectur.
                </p>
                <h5>June 21, 2019</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
