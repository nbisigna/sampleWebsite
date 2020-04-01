import React from 'react';

const Errors = ({ errors, setErrors }) => {
  const handleClick = ind => {
    setErrors(errors.filter((v, i) => i != ind));
  };

  return (
    <div className="alert-fixed">
      {errors.map((error, ind) => {
        return (
          <div className="alert alert-danger errors" role="alert">
            {error.msg} for {error.param}
            <span
              className="xbox"
              onClick={e => {
                e.preventDefault();
                handleClick(ind);
              }}
            >
              X
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Errors;
