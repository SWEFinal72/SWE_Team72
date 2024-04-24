import { useRef,useState,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useLoginMutation } from "./authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";



const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
  
    useEffect(() => {
      setErrMsg('');
    }, [username, password]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const { accessToken } = await login({ username, password }).unwrap();
        dispatch(setCredentials({ accessToken }));
        setUsername("");
        setPassword("");
        navigate("/user_dashboard");
      } catch (err) {
        if (!err.status) {
          setErrMsg("No Server Response");
        } else if (err.status === 400) {
          setErrMsg("Missing Username or Password");
        } else if (err.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg(err.data?.message);
        }
      }
    };
  
    const handleUserInput = (e) => {
      setUsername(e.target.value); // Update the state with the value being typed
    };
  
    const handlePwdInput = (e) => {
      setPassword(e.target.value);
    };
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const passwordRef = useRef(null);
    const [login, { isLoading }] = useLoginMutation();
  
    const errClass = errMsg ? "error" : "offscreen";
  
    if (isLoading) return <div>Loading...</div>;
  
    return (
      <section className="public">
        <header>
          <h1> Login</h1>
        </header>
        <main className="login">
          <p ref={errRef} className={errClass} aria-live="assertive">
            {errMsg}
          </p>
  
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              className="form__input"
              type="text"
              id="username"
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
  
            <label htmlFor="password">Password:</label>
            <input
              className="form__input"
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={password}
              required
            />
            <button className="form__submit-button">Sign In</button>
          </form>
        </main>
        <footer>
          <Link to="/">Back to Home</Link>
        </footer>
      </section>
    );
  };
  
  export default Login;

// const Login = () => {
//   const userRef = useRef()
//   const errRef = useRef()
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [errMsg, setErrMsg] = useState('')

//     useEffect(() => {
//         userRef.current= userRef.value;
//       }, []);
      

//   useEffect(() => {
//       setErrMsg('');
//   }, [username, password])

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
        
//         const { accessToken } = await login({ username, password }).unwrap()
//         dispatch(setCredentials({ accessToken }))
//         setUsername('')
//         setPassword('')
//         navigate('/user_dashboard')
//     } catch (err) {
//         if (!err.status) {
//             setErrMsg('No Server Response');
//         } else if (err.status === 400) {
//             setErrMsg('Missing Username or Password');
//         } else if (err.status === 401) {
//             setErrMsg('Unauthorized');
//         } else {
//             setErrMsg(err.data?.message);
//         }
//         errRef.current = errRef.value;
//     }
// }

// const handleUserInput = (e) => setUsername(e.target.value)
// const handlePwdInput = (e) => setPassword(e.target.value)
   
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const passwordRef = useRef(null)

//     const [login, { isLoading }] = useLoginMutation()


//     const errClass = errMsg ? 'error' : "offscreen"

//     if (isLoading) return <div>Loading...</div>

//     const content = (
//       <section className="public">
//           <header>
//               <h1> Login</h1>
//           </header>
//           <main className="login">
//               <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

//               <form className="form" onSubmit={handleSubmit}>
//                   <label htmlFor="username">Username:</label>
//                   <input
//                       className="form__input"
//                       type="text"
//                       id="username"
//                       ref={userRef}
//                       value={username}
//                       onChange={handleUserInput}
//                       autoComplete="off"
//                       required
//                   />

//                   <label htmlFor="password">Password:</label>
//                   <input
//                       className="form__input"
//                       type="password"
//                       id="password"
//                       onChange={handlePwdInput}
//                       value={password}
//                       required
//                   />
//                   <button className="form__submit-button">Sign In</button>
//               </form>
//           </main>
//           <footer>
//               <Link to="/">Back to Home</Link>
//           </footer>
//       </section>
//   )

//   return content
// }

// export default Login