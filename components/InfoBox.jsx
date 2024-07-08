import React from 'react'

const InfoBox = ({
    heading,
    backgroundColor='bg-gray-100',
    textColor='text-gray-800',
    buttonInfo,
    children
}) => {
  return (
    <div class={`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 class={`${textColor} font-bold`}>{heading}</h2>
        <p class={`${textColor} mt-2 mb-4`}>
            {children}
        </p>
        <a
            href={buttonInfo.link}
            class={`inline-block ${backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700 hover:opacity-80`}
        >
            {buttonInfo.text}
        </a>
    </div>
  )
}

export default InfoBox
