import { useState } from "react";

function SignUp() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    pic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    // Your form submission logic here
  };

  const postDetails = (pics) => {
    // Your picture upload logic here
  };

  return (
    <form className="space-y-5" onSubmit={submitHandler}>
      <div>
        <label htmlFor="first-name" className="font-bold">Name</label>
        <input
          type="text"
          id="first-name"
          name="name"
          placeholder="Enter Your Name"
          value={data.name}
          onChange={handleChange}
          className="input-style"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-bold">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email Address"
          value={data.email}
          onChange={handleChange}
          className="input-style"
        />
      </div>
      <div>
        <label htmlFor="password" className="font-bold">Password</label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={handleChange}
            className="input-style"
          />
          <button
            className="show-hide-btn"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="pic" className="font-bold">Upload Your Picture</label>
        <input
          type="file"
          id="pic"
          name="pic"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
          className="input-style"
        />
      </div>
      <button
        className="btn-orange w-full"
        onClick={submitHandler}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
