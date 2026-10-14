import React, { useState } from "react";

function FormHandling() {
  // for user name
  const [user, setUser] = useState("");
  // for user phone
  const [phone, setPhone] = useState("");
  // for user gender
  const [gender, setGender] = useState("");
  // for user grade
  const [grade, setGrade] = useState("");
  // for user hobbies
  const [hobbies, setHobbies] = useState([]);

  function getHobby(event) {
    if (event.target.checked) {
      setHobbies([...hobbies, event.target.value]);
    } else {
      setHobbies([...hobbies.filter((item) => item != event.target.value)]);
    }
  }
=======
  // for user gender
  const [grade, setGrade] = useState("");
>>>>>>> 74d5da439f943565ee287530f7e5322603488210

  return (
    <div>
      <h1 className="text-4xl text-bold text-center">Form Handling ReactJS</h1>
      <div className="text center p-4 rounded-2xl bg-amber-100 mt-2 mb-5">
        <h1 className="text-3xl text-center mb-2">Form Area</h1>

        {/* name */}
        <input
          className="mb-2 border p-2 rounded"
          type="text"
          placeholder="Enter name"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <br />
        <br />
          placeholder="Enter name" value={user} onChange={(event)=> setUser(event.target.value)}
        />
        <br /><br />

        {/* phone */}
        <input
          className="mb-2 border p-2 rounded"
          type="tel"
          placeholder="Enter phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <br />
        <br />

        {/* gender */}

        <input
          className="mb-2 border p-2 rounded"
          type="radio" value="Male"
          id="Male"
          name="gender"
          checked={gender == "Male"}
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="Male" className="mr-5">
          Male
        </label>

        <input
          className="mb-2 border p-2 rounded"
          type="radio"
          id="Female"
          name="gender"
          checked={gender == "Female"} value="Female"
          onChange={(event) => setGender(event.target.value)}
        />
        <label htmlFor="Female">Female</label>
        <br />
        <br />

        {/* grade */}
        <label htmlFor="grade" className="mr-5">
          Grade
        </label>
        <select name="grade" id="grade" defaultValue="1st" onChange={(event)=> setGrade(event.target.value)} className="mb-2 border p-2 rounded">
          placeholder="Enter phone" value={phone} onChange={(event)=> setPhone(event.target.value)}
        />
        <br /><br />

        {/* gender */}
        
        <input className="mb-2 border p-2 rounded" type="radio" id="Male" value={gender} onChange={(event)=> setGender(event.target.value)}/>
        <label htmlFor="Male" className="mr-5">Male</label>

        
        <input className="mb-2 border p-2 rounded" type="radio" id="Female" />
        <label htmlFor="Male">Female</label>
        <br /><br />

        {/* grade */}
        <label htmlFor="grade" className="mr-5">Grade</label>
        <select name="grade" id="grade" className="mb-2 border p-2 rounded">
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
          <option value="5th">5th</option>
        </select>
        <br />
        <br />

        {/* hobbies */}
        <h2>hobbies</h2>
        <input
          type="checkbox"
          id="Reading"
          value="Reading"
          onChange={getHobby}
        />
        <label htmlFor="Reading">Reading</label>
        <br />
        <input
          type="checkbox"
          id="Cricket"
          value="Cricket"
          onChange={getHobby}
        />
        <label htmlFor="Cricket">Cricket</label>
        <br />
        <br />

        <button className="bg-green-500 px-4 py-2 text-bold rounded hover:bg-green-600 text-white cursor-pointer">
          Submit
        </button>
        <button
          className="bg-orange-500 px-4 py-2 text-bold rounded hover:bg-orange-600 text-white cursor-pointer"
          onClick={() => {
            setUser("");
            setPhone("");
            setGender("");
            setGrade("");
            setHobbies([]);
          }}
        >
          Reset
        </button>
=======
        <br /><br />
        <label htmlFor="hobbies" className="mb-2">Hobbies</label>
        <input type="checkbox" />
        <button className="bg-green-500 px-4 py-2 text-bold rounded hover:bg-green-600 text-white cursor-pointer">Submit</button>
>>>>>>> 74d5da439f943565ee287530f7e5322603488210
      </div>

      <div>
        <h1>Form Data</h1>
        <h2>User Name: {user}</h2>
        <h2>User Phone: {phone}</h2>
        <h2>User Gender: {gender}</h2>
        <h2>User Grade: {grade}</h2>
        <h2>User Hobbies: {hobbies.toString()}</h2>
        <h2>User Grader: {grade}</h2>
      </div>
    </div>
  );
}

export default FormHandling;
