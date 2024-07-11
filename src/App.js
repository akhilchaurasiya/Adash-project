import './App.css';
import image1 from "./img/pen.jpg";
import rating from "./img/ratingStar.png";
import check1 from "./img/check.png";
import profile from "./img/th.jpg";

function App() {
  return (
    <div className="web-screen">
      <div className="web-container">
        <div className="container-heading">
        <h2 className="title">Batches</h2>
        
        </div>

        <div className="container-body-heading">
          <h3>Starter <span className="container-ncert">(Class 5 NCERT)</span> </h3>
        </div>

       
        <div className="container-body-section">
          <div className="container-left-section">
          <div className="left-section-desc">
            <img className="image1" src = {image1}alt="Pen" />
            <p>English</p>
          </div>
          </div>

          <div className="container-right-section" >
            <div className="right-section-heading">
              <div className="left-head">
                <h2>Complete NCERT Class 5 All Subjects</h2>
                <h3 className="total">Total Chapters:25</h3>
              </div>
              <p>lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip</p>
            </div>


            <div className="right-section-course">
              <div className="courseRating">Course Rating</div>
              <div>
                <img src={rating} alt="Rating" />
              </div>
            </div>


            <div className="right-section-features">
                <div className="features">
                   <img src = {check1} alt="Check"/>
                   <p>Live Classes</p>
                </div>

                <div className="features">
                   <img src ={check1} alt="Check"/>
                   <p>Recorded Classes</p>
                </div>

                <div className="features">
                   <img src ={check1} alt="Check"/>
                   <p>Mock Tests</p>
                </div>

                <div className="features">
                   <img src ={check1} alt="Check" />
                   <p>DPP Sheets</p>
                </div>

                <div className="features">
                   <img src ={check1} alt="Check" />
                   <p> Notes</p>
                </div>

                <div className="features">
                   <img src ={check1} alt="Check" />
                   <p>MCQs </p>
                </div>
            </div>


            <div className="right-section-subject">
              <div className="subject-heading">
                 <h4 className="subject-start">Subjects Covered</h4> 
                 <h5 className="subject-end">Total Subjects:6</h5>
              </div>

              <div className="right-section-subjectName">
              <div className="features-subject">
                   <img src ={check1} alt="Check" />
                   <p> Subject Name</p>
                </div>
              <div className="features-subject">
                   <img src ={check1} alt="Check" />
                   <p> Subject Name</p>
                </div>
              <div className="features-subject">
                   <img src ={check1} alt="Check" />
                   <p> Subject Name</p>
                </div>
              <div className="features-subject">
                   <img src ={check1} alt="Check" />
                   <p> Subject Name</p>
                </div>
              <div className="features-subject">
                   <img src ={check1} alt="Check" />
                   <p> Subject Name</p>
                </div>
              <div className="features-subject">
                   <img src ={check1} alt="Check" />
                   <p> Subject Name</p>
                </div>

              </div>

            </div>


            <div className="right-section-instructor">
              <div className="left-part-instructor">
                <img className="profile" src={profile}  alt="Check" />
                <p>Instructor Name</p>
              </div>

              <div className="right-part-instructor">
                <img className="rating" src={rating} alt="Check" />
                <p>(60)</p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="container-price" >
          <div className="left-price">
            <div className="rupees">₹ 1500.00</div>
            <div><del>₹ 1500.00</del></div>
          </div>

          <div className="right-price">
            <div>
                <button className="view-details">View Details</button>
            </div>

            <div>
                <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
