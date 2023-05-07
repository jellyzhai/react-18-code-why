import "./App.css";
import HeaderContainer from "./components/HeaderContainer";
import HeaderCenterContainer from "./components/HeaderCenterContainer";
import HeaderLeftContainer from "./components/HeaderLeftContainer";
import HeaderRightContainer from "./components/HeaderRightContainer";
import { createContext } from "react";
import MultipleCheckbox from "./components/MultipleCheckbox";
import MultipleSelect from "./components/MultipleSelect";
import CssTransitionContent from "./components/CssTransitionContent";
import SwitchTransitionContent from "./components/SwitchTransitionContent";
import AnimationToDoList from "./components/AnimationToDoList";
import StyledComponentsBase from "./components/StyledComponentsBase";
import ClassNamesCase from "./components/ClassNamesCase";
import ParentRedux from "./components/redux-case/ParentRedux";
import AddCount from "./components/redux-toolkit/AddCount";
import { Provider } from "react-redux";
import reduxStore from "./components/redux-case/store";
import reduxToolkitStore from "./components/redux-toolkit/store";
import MinusCount from "./components/redux-toolkit/MinusCount";
import { CardWrapper } from "./style/CardWrapper";
import AsyncReducerRequest from "./components/redux-toolkit/AsyncReducerRequest";
import RouterPage from "./pages/RouterPage";

export const UserContext = createContext();

function App() {
  const user = { name: "jerry" };
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <CardWrapper>
          <RouterPage />
        </CardWrapper>

        <HeaderContainer
          left={<HeaderLeftContainer />}
          center={<HeaderCenterContainer />}
          right={<HeaderRightContainer />}
        />
        <MultipleCheckbox />
        <MultipleSelect />
        <CssTransitionContent />
        <SwitchTransitionContent />
        <AnimationToDoList />
        <StyledComponentsBase />
        <ClassNamesCase />

        <Provider store={reduxStore}>
          <ParentRedux />
        </Provider>

        <Provider store={reduxToolkitStore}>
          <CardWrapper>
            <AddCount />
            <MinusCount />
            <AsyncReducerRequest />
          </CardWrapper>
        </Provider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
