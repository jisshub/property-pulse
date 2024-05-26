import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <html>
        <body>  
            <div>
             <h1 className="text-3xl">
                Properties
             </h1>
             <Link href='/properties'>Go to Properties</Link>
            </div>
        </body>
    </html>
  )
}

export default HomePage