import React from 'react';

const CustomCursor = ({ mousePosition, cursorRef, cursorDotRef }) => {
  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference transition-transform duration-75 hidden md:block" 
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full border-2 border-white rounded-full"></div>
      </div>
      <div 
        ref={cursorDotRef} 
        className="fixed w-2 h-2 pointer-events-none z-50 bg-white rounded-full transition-transform duration-200 ease-out hidden md:block" 
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
    </>
  );
};

export default CustomCursor; 