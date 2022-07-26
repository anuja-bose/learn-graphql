// Render Prop
import React from 'react';
import { Container } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AccountsPage = () => ( <Container className='sub-container'>
<div className="section-title">
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ username: '', fullname: '', accountNumber:'' }}
      validate={values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            const data = {"data" : values}
          alert(JSON.stringify(data, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="username" name="username" />
          <ErrorMessage name="username" component="div" />
          <Field type="fullname" name="fullname" />
          <ErrorMessage name="fullname" component="div" />
          <Field type="accountNumber" name="accountNumber" />
          <ErrorMessage name="accountNumber" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
  </div></Container>
);

export default AccountsPage;