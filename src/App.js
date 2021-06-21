import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {Postmodal} from './Modals/postmodal/postmodal';
import {Replymodal} from './Modals/replymodal/replymodal';
import {Filtermodal} from "./Modals/filtermodal/filtermodal";
import {Sortmodal} from "./Modals/sortmodal/sortmodal";
import {Navbar} from './components/Navbar/Navbar';
import {Navbar2} from './components/Navbar2/Navbar2';
import { DiscussCard } from './components/DiscussCard/DiscussCard';
import {HorizontalBar} from './components/horizontalBar/horizontalBar';
import {Sidebar} from './components/sidebar/sidebar';
import { FloatingButtons } from './components/floatingButton/floatingButtons';

import './App.css';

function App() {
  return (
    <BrowserRouter>
<div>
    <div id="qna-wrapper" class="row">
    <div id="qnasection" class="col-xs-12 col-sm-12 col-lg-9">
    <div id="discussPanel">
     <Navbar />
     <Switch>
        <Route path="/postmodal" exact component={Postmodal} />
        <Route path="/replymodal" exact component={Replymodal} />
        <Route path="/filtermodal" exact component={Filtermodal} />
        <Route path="/sortmodal" exact component={Sortmodal} />
      </Switch>
     <HorizontalBar />
     <Navbar2 />
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
