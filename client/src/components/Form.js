import React, { useState,} from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "../App.css";
export default function Form() {
  const navigate = useNavigate()
  const url = "https://effizient.onrender.com/api/v1/students";
  const [isloading, setIsloading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    age: 0,
    highestedu: "",
    highestinst: "",
    study: "",
    workexp: "",
    cainst: "",
    caprog: "",
    country: "",
    goals: "",
    englistening: "",
    engreading: "",
    engspeaking: "",
    engwriting: "",
    fyrfee: true,
    fee: "",
    gic: true,
    gicfee: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    await fetch(`${url}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
    }).then((res) => {
      setIsloading(false);
      navigate("/success")
    });
  };
  const handleform = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="inp-div w-50">
          <form onSubmit={handlesubmit}>
            <div className="inp-card">
              <p className="fw-semibold">
                Email📩 <span className="text-danger">*</span>
              </p>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Full Name📛 <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Age <span className="text-danger">*</span>
              </p>
              <input
                type="number"
                name="age"
                placeholder="Your age"
                onChange={handleform}
                style={{ width: "100px" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Highest Level of Education 🎒{" "}
                <span className="text-danger">*</span>
              </p>
              <select
                name="highestedu"
                onChange={handleform}
                className="form-select"
                aria-label="Default select example"
                style={{ width: "180px" }}
                // value="choose"
                defaultValue="choose"
              >
                <option value="choose" disabled>Choose</option>
                <option value="Grade 12">Grade 12</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelors Degree">Bachelors Degree</option>
                <option value="Masters Degree">Masters Degree</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Institute where you completed your highest level of education🏫{" "}
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="highestinst"
                placeholder="Institute name"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                What did you study📖? <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="study"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Do you have any relevant work experience💪?{" "}
                <span className="text-danger">*</span>
              </p>
              <div className="fs-6 my-4">
                Write None, if you have no work experience.
                <br />
                if yes, Provide the following details:
                <span>
                  <ol>
                    <li>Job Title</li>
                    <li>Company Name</li>
                    <li>Job duties</li>
                  </ol>
                </span>
                <span className="fw-semibold">Sample Answer:</span> I worked as
                a Sales Manager at Effizient Immigration Inc from Jan 2022 till
                Feb 2023. In this role, I managed sales operations, reaching out
                to leads, lead the outreach program, ensured meeting monthly
                targets.
              </div>
              <input
                type="text"
                name="workexp"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "100%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Which institute did you get admitted to in Canada 🧑🏻‍🏫?{" "}
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="cainst"
                placeholder="Institute Name"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                What is your program of study in Canada 🧑‍💻?
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="caprog"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Which country are you applying from 🔄️?
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="country"
                placeholder="Your Country name"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                What are your future goals 🚀?
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="goals"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                English Scores - Listening 👂
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="englistening"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                English Scores - Reading 📖
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="engreading"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                English Scores - Speaking 🗣️
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="engspeaking"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                English Scores - Writing ✍️
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="engwriting"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Did you pay your first year tuition fee 💵?
                <span className="text-danger">*</span>
              </p>
              <input
                type="radio"
                name="fyrfee"
                value="true"
                onChange={handleform}
                required
              />
              <label className="ps-2">Yes ✅</label>
              <br />
              <input
                type="radio"
                name="fyrfee"
                value="false"
                onChange={handleform}
                required
              />
              <label className="ps-2">No ❌</label>
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Howm much tution fee did you pay 💵?
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="fee"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Did you do a GIC?
                <span className="text-danger">*</span>
              </p>
              <input
                type="radio"
                name="gic"
                value="true"
                onChange={handleform}
                required
              />
              <label className="ps-2">Yes✅</label>
              <br />
              <input
                type="radio"
                name="gic"
                value="false"
                onChange={handleform}
                required
              />
              <label className="ps-2">No❌</label>
            </div>
            <div className="inp-card">
              <p className="fw-semibold">
                Howm much did you pay towards GIC💸?
                <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                name="gicfee"
                placeholder="Your answer"
                onChange={handleform}
                style={{ width: "30%" }}
                required
              />
            </div>
            <div className="d-flex justify-content-center my-5 mt-">
            {isloading ? (
              <>
                <button className="p-2 px-5 btn btn-secondary d-flex justify-content-cemter align-items-center gap-1" disabled>
                  Submit{" "}
                  <TailSpin
                    height="30"
                    width="30"
                    color="#38eb6b"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </button>
              </>
            ) : (
              <>
                <button
                  // type="submit"
                  // onClick={handlesubmit}
                  className="p-2 px-5 btn btn-primary"
                >
                  Submit 🚀
                </button>
              </>
            )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
