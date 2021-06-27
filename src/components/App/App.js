import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import {AskBar} from '../AskBar/AskBar';
import {SwitchBar} from '../SwitchBar/SwitchBar';
import { DiscussCard } from '../DiscussCard/DiscussCard';
import {HorizontalBar} from '../horizontalBar/horizontalBar';
import {Sidebar} from '../sidebar/sidebar';
import { FloatingButtons } from '../floatingButton/floatingButtons';

import './App.css';

function App() {
  const askDoubtHandler = () => {

  }
  return (
    <BrowserRouter>
<div>
    <div id="qna-wrapper" class="row">
    <div id="qnasection" class="col-xs-12 col-sm-12 col-lg-9">
    <div id="discussPanel">
     <AskBar />
     
     <HorizontalBar />
     <SwitchBar />
     <DiscussCard />
    
    </div>
    </div>
    <Sidebar />
    </div>
    <FloatingButtons />
</div>
    </BrowserRouter>
  
  );
}

export default App;
