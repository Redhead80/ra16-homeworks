import React from "react";
import {NavLink} from "react-router-dom";

export default function Post({id, content, created}) {
    return (
        <div className='post-item'>
            <NavLink to={`/post/${id}`}>
                <header>
                    <div className='avatar'>
                        <img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" alt=""/>
                    </div>
                    <h3 className='user-name'>Username</h3>
                </header>
                <div className='post-content'>{content}</div>
                <div className='comment-form'>
                    <div className='comment-avatar'>
                        <img src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" alt=""/>
                    </div>
                    <input placeholder='Напиши комментарий'/>
                </div>
            </NavLink>
        </div>
    )


}