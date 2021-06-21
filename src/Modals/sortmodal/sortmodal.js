import React from 'react'

export const Sortmodal = () => {
    return (
        <div class="modal" id="sortModal">
        <div class="modal-dialog">
        <div class="modal-content mobilemodal">
    
          
            <div class="modal-header">
            <h4 class="modal-title">Sorting Options</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
           
            <div class="modal-body">
               
                <button class="sortbutton">
                    <span class="btn-icon"><i class="fa fa-sort-alpha-asc"></i></span>
                    <span class="btn-label">Alphabetically</span>
                </button>
               
                <button class="sortbutton">
                    <span class="btn-icon"><i class="fa fa-thumbs-up"></i></span>
                    <span class="btn-label">Highest Upvotes</span>
                </button>
               
                <button class="sortbutton">
                    <span class="btn-icon"><i class="fa fa-thumbs-down"></i></span>
                    <span class="btn-label">Lowest Upvotes</span>
                </button>
               
                <button class="sortbutton">
                    <span class="btn-icon"><i class="fa fa-sort-amount-asc"></i></span>
                    <span class="btn-label">Latest First</span>
                </button>
               
                <button class="sortbutton">
                    <span class="btn-icon"><i class="fa fa-sort-amount-desc"></i></span>
                    <span class="btn-label">Oldest First</span>
                </button>
            </div>
    
        </div>
        </div>
    </div>
    )
}
