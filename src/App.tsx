import React from 'react';
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import './dx-styles.scss';

import {useScreenSizeClass} from "./utils/media-query";

function App() {

    const screenSizeClass:string = useScreenSizeClass();
  return (<>
      <div className={`app ${screenSizeClass}`}>
        <Main/>

        </div>
    <div>
        <Footer>
            Test task was made by Mitko Kirill {new Date().getFullYear()}.
            <br/>
            3331668@mail.ru
        </Footer>
    </div>
      </>
  );
}

export default App;
