import React from 'react'
// import './postmodal.css'
export const Postmodal = () => {
    return (
        <div class="modal" id="formModal">
        <div class="modal-dialog">
        <div class="modal-content">
    
            
            <div class="modal-header">
            <h4 class="modal-title">Ask your Question</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
         
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <textarea class="form-control" id="ques-title" rows="3" placeholder="Add an interesting title"></textarea>
                        <small id="quesHelpBlock" class="form-text text-muted">
                            Short but descriptive
                        </small>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="ques-content" rows="4" placeholder="Your text post (optional)"></textarea>
                        <small id="contentHelpBlock" class="form-text text-muted">
                            Provide a detailed description to make it easier for others to reply.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="category">Choose a Category</label>
                        <select class="form-control" id="category">
                            <option>Java</option>
                            <option>Python</option>
                            <option>Programming Languages</option>
                            <option>Competitive Programming</option>
                            <option>Interview Preparation</option>
                            <option>Operating Systems</option>
                            <option>Dynamic Programming</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="ques-tags" rows="2" placeholder="Add tags (optional)"></textarea>
                        <small id="tagsHelpBlock" class="form-text text-muted">
                            To help people quicly see what you posted about
                        </small>
                    </div>
                    <button class="btn btn-primary" type="submit">Submit your Question</button>
                </form>
            </div>
    
        </div>
        </div>
    </div>
    )
}
