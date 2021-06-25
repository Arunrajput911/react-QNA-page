import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import './postmodal.css'
export const Postmodal = () => {
    const [queryTitle,setQueryTitle] = useState("");
    const [queryDescription,setQueryDescription] = useState("");
    const [category,setcategory] = useState("");
    const [tags,setTags] = useState("");


    const handleSubmit = (e) => {
        
        e.preventDefault();
        // if(!queryTitle || !queryDescription || !category || !tags){
            
        // }
        // console.log(queryTitle,queryDiscription,category,tags)
        axios
        .post("http://localhost:4000/post/askDoubt",{queryTitle,queryDescription,category,tags})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div class="modal" id="formModal">
        <div class="modal-dialog">
        <div class="modal-content">
    
            
            <div class="modal-header">
            <h4 class="modal-title">Ask your Question</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
         
            <div class="modal-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-group">
                        <textarea class="form-control"
                        id="ques-title" rows="3"
                        placeholder="Add an interesting title"
                        value={queryTitle}
                        onChange={(e) => setQueryTitle(e.target.value) }>
                        </textarea>
                        <small id="quesHelpBlock" class="form-text text-muted">
                            Short but descriptive
                        </small>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control"
                         id="ques-content" rows="4"
                          placeholder="Your text post (optional)"
                          value={queryDescription}
                        onChange={(e) => setQueryDescription(e.target.value) }>

                        </textarea>
                        <small id="contentHelpBlock" class="form-text text-muted">
                            Provide a detailed description to make it easier for others to reply.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="category">Choose a Category</label>
                        <select class="form-control" id="category"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}>
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
                        <textarea class="form-control" id="ques-tags" rows="2" placeholder="Add tags (optional)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value) }>

                        </textarea>
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
