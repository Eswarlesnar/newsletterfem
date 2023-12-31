import { FC } from "react";
import "./success.css"

const Success:FC = () => {
    return <div className="container">
         <div className="thanks-main">
            <div className="thanks-content">
                <div className="thanks-success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="64" height="64" viewBox="0 0 64 64">
                        <defs>
                        <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6A3A"/><stop offset="100%" stopColor="#FF527B"/>
                        </linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/>
                        <path stroke="#FFF" strokeWidth="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
                </div>
                <div>
                    <h1>
                        Thanks for subscribing
                    </h1>
                    <p>
                        A confirmation email has been sent to #gmail.com.Please open it and click the button inside to confirm your subscriptions
                    </p>
                </div>
            </div>
            <div>
                <button>
                    Dismiss message
                </button>
            </div>
         </div>
    </div>
}

export default Success