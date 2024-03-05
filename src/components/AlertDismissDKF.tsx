import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AlertDismissDKF = ({ children }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible fade show">
        {children}
      </div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </>
  );
};

export default AlertDismissDKF;

/*

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

*/
