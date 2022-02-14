import { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../app/store";
import { loginUser } from "../features/account/accountSlice";
import { User } from "../models/User";

const Login: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    name: '',
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  async function handleLogin(event: ChangeEvent<HTMLFormElement>) {
    event?.preventDefault();
    const { email, password } = user;
    await dispatch(loginUser({email, password}));
    setUser({
      name: '',
      password: '',
      email: ''
    })
    router.push('/')
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleLogin} className="form">
        <h2>Log In</h2>
        <input
          value={user.email}
          name="email" 
          onChange={handleChange}
          placeholder="email" 
          type="text" 
          className="form-control" 
        />
        <input
          value={user.password}
          onChange={handleChange}
          name="password" 
          placeholder="password" 
          type="password" 
          className="form-control" 
        />
        <button 
          className="btn btn-outline-dark form-control">
            Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
