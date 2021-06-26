import React from 'react';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import {Postmodal} from '../Modals/postmodal/postmodal';
import {Replymodal} from '../Modals/replymodal/replymodal';
import {Filtermodal} from "../Modals/filtermodal/filtermodal";
import {Sortmodal} from "../Modals/sortmodal/sortmodal";
import {Navbar} from '../Navbar/Navbar';
import {Navbar2} from '../Navbar2/Navbar2';
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
     <Navbar />
     <Switch>
        <Route path="/post" exact component={Postmodal} />
        
        <Route path="/reply" exact component={Replymodal} />
        <Redirect from="/reply" to="/" />
        <Route path="/filtermodal" exact component={Filtermodal} />
        <Route path="/sortmodal" exact component={Sortmodal} />
      </Switch>
     <HorizontalBar />
     <Navbar2 />
     <DiscussCard/>
     <Postmodal askDoubt={askDoubtHandler} />
    
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
