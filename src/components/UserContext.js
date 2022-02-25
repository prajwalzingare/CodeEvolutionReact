import React from "react";

const UserContext = React.createContext();
//every object comes with provider and consumer react component
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
//we creat that component and export them.
//this is first step to create context api.
export { UserProvider, UserConsumer };
