import FirstComponent from "./FirstComponent";
import JsTopics from "./JsTopics";
import ImportExport, { InnerComponent } from "./ImportExport";
import NestedComponents from "./NestedComponents";
import JsxExample from "./JsxExample";
import JsInJsx from "./JsInJsx";
import EventsInReact from "./EventsInReact";
import UseState from "./UseState";
import CounterApp from "./CounterApp";
import ToggleButton from "./ToggleButton";
import PropsInReactJS from "./PropsInReactJS";
import UsestateAsProps from "./UsestateAsProps";
import { useState } from "react";
import PropsChildern from "./PropsChildern";
import OnChangeEvent from "./OnChangeEvent";
import SpredOperator from "./SpredOperator";
import FormHandling from "./FormHandling";

function App() {
  // using variables as props
  // let userName = "Fatima Bibi"
  // let age = 25;

  // using array as props

  // const colors = ["Green", "Red", "Blue"];

  // using objects
  // const user = {
  //   name: "Fatima Bibi",
  //   email: "fatima@euio.com"
  // }

  // using array of objects
  // const students = [
  //   {
  //     id: 1,
  //     name: "Fatima Bibi",
  //     class: "8th",
  //     result: "Pass"
  //   },

  //    {
  //     id: 2,
  //     name: "Zainab Batool",
  //     class: "6th",
  //     result: "Pass"
  //   },

  //    {
  //     id: 3,
  //     name: "Muhammad Hussain",
  //     class: "5th",
  //     result: "Pass"
  //   },

  //    {
  //     id: 4,
  //     name: "Ayesha Bibi",
  //     class: "3rd",
  //     result: "Pass"
  //   }
  // ];
// state as props example
// const[empName, setEmpName] = useState("Fatima Batool");
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-bold text-center p-2 bg-green-200">
          Welcome to new course of ReactJS
        </h1>
        <br />
        {/* <JsTopics /> */}
        {/* <FirstComponent /> */}
        {/* <ImportExport /> */}
        {/* <InnerComponent /> */}
        {/* <NestedComponents /> */}
        {/* <JsxExample /> */}
        {/* <JsInJsx /> */}
        {/* <EventsInReact /> */}
        {/* <UseState /> */}
        {/* <CounterApp /> */}
        {/* <ToggleButton /> */}
        {/* {/* <PropsInReactJS /*user={userName} age={age}*/ /*color={colors}*/ /*user={user}*/ /*students={students}*/}
        {/* <UsestateAsProps emp={empName}/> */}
        {/* <button onClick={()=> setEmpName("Zainab Rani")}>Change Name</button> */}
        {/* Props Childern topic component */}
       {/* <PropsChildern>
        <h1 className="text-4xl text-blue-600">Student Card</h1>
        <h4 className="text-2xl text-green-500">Student Name: Fatima Bibi</h4>
        <h4 className="text-2xl text-green-500">Student Age: 45</h4>
        <h4 className="text-2xl text-green-500">Student Email: fatima@ymail.com</h4>
        <h4 className="text-2xl text-green-500">Marital Status: Single</h4>
       </PropsChildern> */}
       {/* <OnChangeEvent /> */}
       {/* <SpredOperator /> */}
       <FormHandling />

      </div>
    </>
  );
}

export default App;
