import React from 'react'

const SectionWrapper = ({children, classNames}) => {
  return (
    <div className={`my-[5rem] lg:my-[8rem] 2xl:my-[10rem] flex flex-col xl:px-10 ${classNames}`}>
        {children}
    </div>
  )
}

export default SectionWrapper