import React,{useState,useEffect} from 'react'
import axios from 'axios';
export const Replymodal = () => {

    const [answerTitle,setAnswerTitle] = useState("");
    const [answer,setAnswer] = useState("");
    const [tags,setTags] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:4000/post/reply",{answerTitle,answer,tags})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })

    }
    return (
        <div class="modal" id="replyModal">
        <div class="modal-dialog">
        <div class="modal-content">
    
            
            <div class="modal-header">
            <h4 class="modal-title">Post a Reply</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
    
            <div class="modal-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-group">
                        <textarea class="form-control"
                         id="sol-title" rows="1"
                          placeholder="Your Solution Headline"
                          value={answerTitle}
                          onChange={(e) => setAnswerTitle(e.target.value)}
                          ></textarea>
                        <small id="solHelpBlock" class="form-text text-muted">
                            Short and Simple
                        </small>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control"
                         id="sol-content" rows="4"
                          placeholder="Describe your Solution"
                          value={answer}
                          onChange={(e) => setAnswer(e.target.value)}
                          ></textarea>
                        <small id="contentHelpBlock" class="form-text text-muted">
                            Provide a detailed description about your solution
                        </small>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="sol-tags"
                         rows="2" placeholder="Add tags (optional)"
                         value={tags}
                         onChange={(e) => setTags(e.target.value)}
                         ></textarea>
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
