import img from "../../../../../assets/img/cards/evento1.png";
import img1 from "../../../../../assets/img/cards/evento2.png";
export function Eventos() {
  return (
    <>
      <section id="tournaments">
        <div className="flex">
          <span className="badge tournaments">Eventos Proximos</span>
          <div className="box">
            <span className="badge premium-tournament">Premium </span>
            <div className="tournaments-image">
              <img src={img} />
            </div>
            <div className="tournaments-content">
              <h3>La vida</h3>
              <div>
                <label>Tournament Begins:</label> <strong>June 20, 2019</strong>
              </div>
              <div>
                <label>Tournament Ends:</label> <strong>July 01, 2019</strong>
              </div>
              <div>
                <label>Participants:</label> <strong>10 teams</strong>
              </div>
              <div>
                <label>Tournament Organizer:</label> <strong>Admin</strong>
              </div>
              <div>
                <label className="prizes">Prizes:</label>{" "}
                <label>
                  1st place $2000, 2nd place: $1000, 3rd place: $500
                </label>
              </div>
            </div>
          </div>
          <div className="box">
            <span className="badge premium-tournament">Premium </span>
            <div className="tournaments-image">
              <img src={img1} />
            </div>
            <div className="tournaments-content">
              <h3>La Insulina</h3>
              <div>
                <label>Tournament Begins:</label> <strong>June 20, 2019</strong>
              </div>
              <div>
                <label>Tournament Ends:</label> <strong>July 01, 2019</strong>
              </div>
              <div>
                <label>Participants:</label> <strong>10 teams</strong>
              </div>
              <div>
                <label>Tournament Organizer:</label> <strong>Admin</strong>
              </div>
              <div>
                <label className="prizes">Prizes:</label>{" "}
                <label>
                  1st place $2000, 2nd place: $1000, 3rd place: $500
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
