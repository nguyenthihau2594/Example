
import React from 'react';
import s from './Button.module.scss';



function Button({kind,fullWidth,children,...props}) {
  return (
    <>
      <button kind={kind} type="button"
       className={[s[kind], s.btn].join(" ")} 
       >
        {children}</button>
    </>
  );
}

export default Button;
