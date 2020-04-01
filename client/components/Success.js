import React from 'react';

const Success = ({ success, setSuccess }) => {
  const handleClick = ind => {
    setSuccess(success.filter((v, i) => i != ind));
  };

  return (
    <div className="alert-fixed">
      {success.map((suc, ind) => {
        return (
          <div className="alert alert-success success" role="alert">
            {suc.msg}
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

export default Success;
