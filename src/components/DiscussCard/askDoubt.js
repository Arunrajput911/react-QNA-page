import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import {Reply} from './reply';

export const AskDoubt = () => {
    return (
        <div className="container-fluid">
           <div className="row">
               <div className="col-md-12 no-pad">
                   <div className="card mb-4">
                       <div className="card-header">
                           <div className="media flex-wrap w-100 align-items-center"> <img src="https://i.imgur.com/iNmBizf.jpg" className="d-block ui-w-40 rounded-circle" alt="" />
                               <div className="media-body ml-3"> <a href="javascript:void(0)" data-abc="true">Tom Harry</a>
                                   <div className="text-muted small">13 days ago</div>
                               </div>
                           </div>
                       </div>
                       <div className="card-body">
                           <div className="text-muted small">
                               <div className="category"><a href="#"><i className="fa fa-bookmark"></i> <strong>Category Name</strong></a></div>
                           </div>
                           <h2>Here comes the Question Title....</h2>
                           <p> For me, getting my business website made was a lot of tech wizardry things. Thankfully i get an ad on Facebook ragarding commence website. I get connected with BBB team. They made my stunning website live in just 3 days. With the increase demand of online customers. I had to take my business online. BBB Team guided me at each step and enabled me to centralise my work and have control on all aspect of my online business. </p>
                           <div className="tagContainer mt-20">
                               <a href="#" className="tag color1">OOPs Concept</a>
                               <a href="#" className="tag color2">Polymorphism</a>
                               <a href="#" className="tag color3">Java</a>
                               <a href="#" className="tag color4">Programming Languages</a>
                               <a href="#" className="tag color5">Infosys Interview</a>
                               <a href="#" className="tag color6">GATE Preparation</a>
                           </div>
                       </div>
                       <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                           <div className="px-4 pt-3"> <a href="javascript:void(0)" className="text-muted d-inline-flex align-items-center align-middle" data-abc="true"> <i className="fa fa-heart text-danger"></i>&nbsp; <span className="align-middle">445</span> </a> <span className="text-muted d-inline-flex align-items-center align-middle ml-4"> <i className="fa fa-eye text-muted fsize-3"></i>&nbsp; <span className="align-middle">14532</span> </span> </div>
                           <div className="px-4 pt-3"> 
                           <Link to="/reply">
                            <button type="button" className="btn btn-primary"  data-toggle="modal" data-target="#replyModal"><i className="fa fa-pencil"></i>&nbsp; Reply</button> 
                            </Link>
                            </div>
                       </div>
                   </div>
               </div>
           </div>
           <Reply />
       </div>
       
    )
}

