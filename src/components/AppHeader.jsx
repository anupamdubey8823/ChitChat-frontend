import React from 'react'
import Notification from '../assets/chat-svgrepo.svg';

export const AppHeader = () => {
  return (
    <div>
        <div className="p-6 max-w-lg mt-5 mx-auto bg-white rounded-lg shadow-lg flex items-center space-x-6 justify-center">
            <div className="shrink-0">
                <a href='http://localhost:3000/'><img className="h-12 w-12" src={Notification} alt="ChitChat Logo" /></a>
            </div>
            <div>
                <div className="text-2xl font-medium text-black">ChitChat</div>
                {/* <p class="text-slate-500">You have a new message!</p> */}
            </div>
        </div>
    </div>
  )
}

