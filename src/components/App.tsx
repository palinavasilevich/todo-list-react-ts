import React, { FC, useState } from "react";
import Todo from "../containers/todo/Todo";

import { IoSunny, IoMoon } from "react-icons/io5";

const App: FC = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (theme: string) => {
    return (): void => setTheme(theme);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="wrapper">
        <header>
          <h1 className="app__title">TODO</h1>
          {theme === "light" ? (
            <IoMoon onClick={changeTheme("dark")} />
          ) : (
            <IoSunny onClick={changeTheme("light")} />
          )}
        </header>
        <main>
          <Todo />
        </main>
        {/* <footer>
        <p>Drag and drop to reorder list</p>
      </footer> */}
      </div>
    </div>
  );
};

export default App;
