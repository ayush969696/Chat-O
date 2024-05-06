import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    show: false,
    loading: false,
  });

  const { email, password, show, loading } = formData;

  const handleClick = () => setFormData({ ...formData, show: !show });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault()

    // Your form submission logic here
  };

  return (
    <form className="flex flex-col space-y-6" onSubmit={submitHandler}>
        <div className="w-full mt-4">
          <input
            id="email"
            name="email"
            value={email}
            type="email"
            placeholder="Enter Your Email Address"
            onChange={handleChange}
            className="input-style w-full "
          />
        </div>
        <div className="w-full">
          <div className="relative">
            <input
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              className="input-style"
            />
            <button className="show-hide-btn" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
        type="submit"
          className="btn-orange w-full"
          onClick={submitHandler}
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <button
          className="btn-red"
          onClick={() => {
            setFormData({
              email: "guest@example.com",
              password: "123456",
              show: false,
              loading: false,
            });
          }}
        >
          Get Guest User Credentials
        </button>
      </form>
  );
};

export default Login;
