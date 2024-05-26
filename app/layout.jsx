import React from 'react'
import '@/assets/styles/globals.css';

const MainLayout = ({ children }) => {
  return (
    <html>
        <body> 
            <div>
                {children}
            </div> 
        </body>
    </html>
  )
}

export default MainLayout
