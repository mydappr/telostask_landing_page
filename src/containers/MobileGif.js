import mobileGif from "../icons/mobileGif.gif";
import apple from "../icons/apple.png";
import googleplay from "../icons/googleplay.png";

function MobileGif() {
  return (
    <div className="mobileall">
           <span className="mobiletitle onM">
            Work faster With Telostask mobile app
          </span>
      <div className="mobileContent">
        <div style={{ maxWidth: "500px", alignSelf: "center" }}>
        <span className="mobiletitle onD">
              Work faster With Telostask mobile app
            </span>
          <div>
            <p className="mobiletext">The TelosTask platform, a do less to earn more $TASK ecosystem
            offers a 4-in-1 product features of tasks, which is set up to
            achieve the possibilities of an actual "task distributions" gig
            marketplace.</p>
           
            <p></p>
          </div>
          <div className="mobileleft">
            <a href="https://play.google.com/store/apps/details?id=com.mydappr.telos_task_proj">
              <img className="appStoreImg" src={googleplay} />
              <span>
                Download on <strong>Playstore</strong>
              </span>
            </a>
            <a>
              <img className="appStoreImg" src={apple} />
              <span>
                coming soon on <strong>Apple store</strong>
              </span>
            </a>
          </div>
        </div>
        <img className="mobilegif" src={mobileGif} />
      </div>
    </div>
  );
}

export default MobileGif;
