import "@/app/globals.css"
import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3001/authenticate',
        { username: value}
      )
      .then((r) => props.onAuth({...r.data, secret: value }))
      .catch((e) => console.log('error', e))
    };
  
    return (
      <div className="grid items-center max-w-3xl mx-auto shadow-lg h-[25rem]  bg-gradient-to-b from-blue-100 to-purple-200 rounded-md">
        <form onSubmit={onSubmit} className="flex-col mx-auto">
          <div className="flex py-4 text-2xl font-bold">Jambo 👋</div>
  
          <div className="flex">Set a username to get started</div>
  
          <div className="grid md:flex">
            <div className="flex space-x-3">
                <input className="bg-slate-50 h-9 my-auto shadow-sm p-2 rounded-sm" name="username" placeholder="username"/>
                <button type="submit" className="my-5 w-24 h-10  font-semibold hover:text-white bg-slate-300 rounded-md hover:scale-105 transition hover:bg-blue-500 ">Enter</button>
            </div>
            
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;