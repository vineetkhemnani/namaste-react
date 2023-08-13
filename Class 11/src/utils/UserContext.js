import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy name",
    login: "dummy@gmail.com"
}});

export default UserContext;