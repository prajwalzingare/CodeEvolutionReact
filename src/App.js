import "./App.css";
import ComponentC39 from "./components/ComponentC39";
import { UserProvider } from "./components/UserContext";
// import ClickCounter from "./components/ClickCounter";
// import ClickCounterTwo36 from "./components/ClickCounterTwo36";
// import Counter37 from "./components/Counter37";
// import Hero from "./components/Hero";
// import HoverCounter from "./components/HoverCounter";
// import HoverCounterTwo36 from "./components/HoverCounterTwo36";
// import FocusInput from "./components/FocusInput";
// import Form from "./components/Form";
// import FraggmentDemo from "./components/FraggmentDemo";
// import FRParentInput from "./components/FRParentInput";
// import PortalDemo from "./components/PortalDemo";
// import User37 from "./components/User37";
// import LifecycleA from "./components/LifecycleA";
// import ParentComp from "./components/ParentComp";
// import RefsDemo from "./components/RefsDemo";
// import Table from "./components/Table";
// import StyleSheet from "./components/StyleSheet";
// import NameList from "./components/NameList";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import ClassClick from "./components/ClassClick";
// import FunctionClick from "./components/FunctionClick";
// import Welcome from "./components/Welcome";
// import Greet from "./components/Greet";
// import Counter from "./components/Counter";
// import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <UserProvider value="prajwal">
        <ComponentC39 />
      </UserProvider>
      {/* <Counter37
        render={(count, incrementCount) => (
          <ClickCounterTwo36 count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter37
        render={(count, incrementCount) => (
          <HoverCounterTwo36 count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <User37 render={(isLoggedIn) => (isLoggedIn ? "prajwal" : "Guest")} /> */}
      {/* <HoverCounterTwo36 /> */}
      {/* <ClickCounterTwo36 /> */}
      {/* <ClickCounter name="prajwal" /> */}
      {/* <HoverCounter /> */}
      {/* <Hero Heroname="Batman" />
      <Hero Heroname="shaktiman" />
      <Hero Heroname="jocker" /> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FraggmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind /> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Welcome name="praajwal" heroname="himanshu" /> */}
      {/* <Greet name="prajwal" heroname="himanshu" /> */}
      {/* <Message /> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
