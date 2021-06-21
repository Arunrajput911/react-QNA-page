import React from 'react'

export const Replymodal = () => {
    return (
        <div class="modal" id="replyModal">
        <div class="modal-dialog">
        <div class="modal-content">
    
            
            <div class="modal-header">
            <h4 class="modal-title">Post a Reply</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <textarea class="form-control" id="sol-title" rows="1" placeholder="Your Solution Headline"></textarea>
                        <small id="solHelpBlock" class="form-text text-muted">
                            Short and Simple
                        </small>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="sol-content" rows="4" placeholder="Describe your Solution"></textarea>
                        <small id="contentHelpBlock" class="form-text text-muted">
                            Provide a detailed description about your solution
                        </small>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="sol-tags" rows="2" placeholder="Add tags (optional)"></textarea>
                        <small id="tagsHelpBlock" class="form-text text-muted">
                            To help people quicly see what you posted about
                        </small>
                    </div>
                    <button class="btn btn-primary" type="submit">Post your Solution</button>
                </form>
            </div>
    
        </div>
        </div>
    </div>
    )
}
