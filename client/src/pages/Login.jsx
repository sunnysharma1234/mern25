// import { set } from 'mongoose';
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
// import { useAuth } from "react";
const URL ="http://localhost:5000/api/auth/login"

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("loginform ",response);
      const res_data = await response.json();
      if (response.ok) {
        
        console.log("Login successful", res_data);
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        toast.success("login succesful");
        Navigate("/");
        
        // You can store the token in localStorage or context for further use
        // localStorage.setItem("token", res_data.token);
      }
      

      else{
       toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("invalid credentisla")
      }
    } catch (error) {
      console.log("register error", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="login form fill kro "
                  width="400"
                  height="400"
                />
              </div>

              {/* registrtion from */}
              <div className="registration-form">
                <h1 className="main-heading mb-3"> Login form </h1>
                <br />

                <form onSubmit={handleSubmit}>
                  {/* <div>
                    <label htmlFor="username"> username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div> */}
                  <div>
                    <label htmlFor="email"> email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter youremail"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  {/* <div>
                    <label htmlFor="phone"> phone</label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="enter your number"
                      id="phone"
                      required
                      autoComplete="off"
                       value={user.phone}
                      onChange={handleInput}
                    />
                  </div> */}
                  <div>
                    <label htmlFor="password"> password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />

                  <button type="submit" className="btn btn-submit">
                    {" "}
                    Login now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
