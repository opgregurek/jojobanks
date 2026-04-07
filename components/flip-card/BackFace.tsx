"use client";

interface BackFaceProps {
  onFlip: () => void;
}

export default function BackFace({ onFlip }: BackFaceProps) {
  return (
    <div className="face-inner">
      
      {/* Background */}
      <div className="face-bg">
        <img src="/images/back-landing.png" alt="" />
      </div>

      {/* Top bar */}
      <div className="back-top-bar">
        <button className="mono-btn" onClick={onFlip}>
          BACK
        </button>
      </div>

      <div className="back-container">
        
        {/* LEFT */}
        <div className="back-left">
          <div className="mono-body section-spacing">
            <p>HELLOJOJOBANKS@GMAIL.COM</p>
            <p>INSTAGRAM.COM/JOJOBANKSI</p>
          </div>

          <p className="mono-body section-title">DEAR READER</p>

          <p className="body indent">
            A visual portfolio is a reflection of your design sensibilities 
            and a cue to the type of designer you are. In a previous iteration, 
            I had three quotes on the front page. A friend had called out 
            “Jojo that is too many quotes”, so in an effort to share my own voice I removed them.
          </p>
          <br></br>
          <p className="body">
            I’ve learned that capturing the “essence” of others is the job, 
            but capturing one’s own is the challenge. This domain will continue to be a 
            living document that best represents me. Shedding its skin and growing a new.
          </p>
          <br></br>
          <p className="body section-spacing">
            Reach out should you be interested to create together.
          </p>

          <div className="cursive-type contact">
            <p>Josephine</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="back-right">
          
          {/* Column 1 */}
          <div className="col-1">
            <p className="mono-body section-title">QUALIFICATIONS</p>
              <p className="body">
                Information & Technology<br />
                Science of Wellbeing<br />
                Ohara School of Moribana
              </p>
          </div>

          {/* Column 2 (stacked) */}
          <div className="col-2">
            
            <div>
              <p className="mono-body section-title">PROFESSIONAL</p>
              <p className="body">
                UX/UI Design<br />
                Creative Direction<br />
                Brand Identity<br />
                3D Modeling
              </p>
            </div>

            <div>
              <p className="mono-body section-title">PLACES</p>
              <p className="body">
              Westpac Bank / Macquarie Bank<br />
              WorkingMouse / Digital Freelancer<br />
              Apas Port / 6OVER3 INSTITUTE
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}