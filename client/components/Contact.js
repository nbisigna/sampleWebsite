import React, { useState } from 'react';

const Contact = ({ setErrors, setSuccess }) => {
  const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  };
  const errors = {
    email: 0,
    firstName: 0,
    lastName: 0,
    phone: 0,
    message: 0
  };
  const valid = {
    email: 1,
    firstName: 1,
    lastName: 1,
    phone: 1,
    message: 1
  };
  const [info, setInfo] = useState(initialState);
  const [err, setErr] = useState(errors);
  const handleSubmit = async () => {
    let recaptcha = await grecaptcha.getResponse();
    let req = await fetch('/contact', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...info, recaptcha })
    });
    let res = await req.json();
    if (res.errors) {
      let errs = res.errors.reduce((a, b) => {
        a[b.param] = -1;
        return a;
      }, valid);
      setErr(errs);
      setErrors(res.errors);
      setTimeout(() => {
        setErrors([]);
      }, 10000);
      grecaptcha.reset();
    } else {
      setInfo(initialState);
      setSuccess(res.success);
      setTimeout(() => {
        setSuccess([]);
      }, 10000);
      grecaptcha.reset();
    }
  };

  const verify = () => {
    try {
      grecaptcha.execute();
    } catch (err) {
      setErrors([
        {
          msg: 'No reCAPTCHA clients exist.',
          param:
            'Try submitting again in 10 seconds. If this error continues please reload the page and try again.'
        }
      ]);
      setTimeout(() => {
        setErrors([]);
      }, 10000);
      grecaptcha.reset();
    }
  };

  if (!window.handleSubmit) {
    window.handleSubmit = handleSubmit;
  } else {
    delete window.handleSubmit;
    window.handleSubmit = handleSubmit;
  }

  return (
    <div id="contact" className="contact padding background">
      <div className="child">
        <div className="contact-container">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Contact Me</h1>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    value={info.firstName}
                    onChange={e =>
                      setInfo({ ...info, firstName: e.target.value })
                    }
                    name="firstName"
                    className={
                      'form-control ' +
                      (err.firstName != 0
                        ? err.firstName == 1
                          ? 'valid'
                          : 'invalid'
                        : '')
                    }
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    value={info.lastName}
                    onChange={e =>
                      setInfo({ ...info, lastName: e.target.value })
                    }
                    name="lastName"
                    className={
                      'form-control ' +
                      (err.lastName != 0
                        ? err.lastName == 1
                          ? 'valid'
                          : 'invalid'
                        : '')
                    }
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    value={info.email}
                    onChange={e => setInfo({ ...info, email: e.target.value })}
                    className={
                      'form-control ' +
                      (err.email != 0
                        ? err.email == 1
                          ? 'valid'
                          : 'invalid'
                        : '')
                    }
                    placeholder="E-mail*"
                    type="email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    value={info.phone}
                    onChange={e => setInfo({ ...info, phone: e.target.value })}
                    className={
                      'form-control ' +
                      (err.phone != 0
                        ? err.phone == 1
                          ? 'valid'
                          : 'invalid'
                        : '')
                    }
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  value={info.message}
                  onChange={e => setInfo({ ...info, message: e.target.value })}
                  type="text"
                  className={
                    'form-control ' +
                    (err.message != 0
                      ? err.message == 1
                        ? 'valid'
                        : 'invalid'
                      : '')
                  }
                  placeholder="Message"
                />
              </div>
              <button onClick={() => verify()} className="btn btn-secondary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
