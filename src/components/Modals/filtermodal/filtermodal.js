import React from 'react'

export const Filtermodal = () => {
    return (
        <div class="modal" id="filtertModal">
        <div class="modal-dialog">
        <div class="modal-content mobilemodal">
    
           
            <div class="modal-header">
            <h4 class="modal-title">Filter Categories</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
            
            <div class="modal-body">
                
                <button class="sortbutton">
                    <span class="btn-label">Programming Languages</span>
                </button>
                
                <button class="sortbutton">
                    <span class="btn-label">Operating Systems</span>
                </button>
                
                <button class="sortbutton">
                    <span class="btn-label">DBMS</span>
                </button>
                
                <button class="sortbutton">
                    <span class="btn-label">Web Development</span>
                </button>
                
                
                <button class="sortbutton">
                    <span class="btn-label">Competitive Programming</span>
                </button>
                
                
                <button class="sortbutton">
                    <span class="btn-label">Dynamic Programming</span>
                </button>
                
                
                <button class="sortbutton">
                    <span class="btn-label">Interview Preparation</span>
                </button>
                
                <button class="sortbutton">
                    <span class="btn-label">Java</span>
                </button>
                
                <button class="sortbutton">
                    <span class="btn-label">Python</span>
                </button>
            </div>
    
        </div>
        </div>
    </div>

    )
}
