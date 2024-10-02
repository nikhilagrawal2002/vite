<!-- import { useState } from "react";

const App = () => {
  const [username, setusername] = useState("");
  const [error, seterror] = useState(false);
  const [gender, setgender] = useState("male");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(username, gender);
  };
  return (
    <div className="w-screen h-screen bg-zinc-500 flex items-center justify-center">
      <form className="flex flex-col items-center justify-center" onSubmit={SubmitHandler}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
          value={username}
          onInput={(e) =>
            e.target.value.length < 5 ? seterror(true) : seterror(false)
          }
        />
        <div>
        <input
          type="radio"
          defaultValue="male"
          name="gender"
          checked={gender === "male" ? true : false}
          onChange={(e) => setgender(e.target.value)}
        />{" "}
        Male 
        </div>
        <div>
        <input
          type="radio"
          defaultValue="female"
          name="gender"
          checked={gender === "female" ? true : false}
          onChange={(e) => setgender(e.target.value)}
        />{" "}
        Female
        </div>
        {error && (
          <p style={{ color: "red" }}>
            Username should be at least 5 characters long
          </p>
        )}
        <br />
        <button type="submit" disabled={error}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App; -->





import { useForm } from "react-hook-form";
const App = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data); 
  };
  // console.log(watch("username"))
  console.log(errors)
  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      	
<input
  {...register("username", {
      maxLength : {
        value: 4,
        message: 'max len error message' 
      },
      minLength: {
        value: 2,
        message: 'min len error message' // JS only: <p>error message</p> TS only support string
      }
  })}
/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;




import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { Child3 } from "./components/Child3";

const App = () => {
  return (
    <div className="bg-red-500 ">
      <Child1 name="Nikhil" college="LNCTS"/>
      <Child2 name="Medhansh"/>
      <Child3 name="Hello">
        <h1>Hello Nihil</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores cupiditate quidem voluptatem, enim iusto, reiciendis soluta pariatur repudiandae dolorem, odit ad recusandae atque architecto natus doloremque qui a ipsa cumque!</p>
        <button>Explore More</button>
      </Child3>
    </div>
  );
};

export default App;
