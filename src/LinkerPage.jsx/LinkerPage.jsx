import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LinkerPage = (props) => {
  const { State, pageName } = props;
  const navigate = useNavigate();
  const Token = localStorage.getItem("Token");

  // useEffect(() => {
  //   if (!Token || Token === "null") {
  //     navigate("/signIn");
  //     return;
  //   }

  //   if (
  //     State.name === "SideNavBar" &&
  //     pageName === "AdminDashboard" &&
  //     (!AdminToken || AdminToken === "null")
  //   ) {
  //     navigate("/signIn");
  //   } else if (
  //     State.name === "SideNavBar" &&
  //     pageName === "AgentDashboard" &&
  //     (!AgentToken || AgentToken === "null")
  //   ) {
  //     navigate("/signIn");
  //   }
  // }, []);

  return (
    <div>
      <State pageName={pageName} />
    </div>
  );
};

export default LinkerPage;
