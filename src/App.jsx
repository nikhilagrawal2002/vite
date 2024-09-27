import { useState } from "react";

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

export default App;
