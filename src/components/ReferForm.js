import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const ReferForm = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      referrerName: '',
      referrerEmail: '',
      refereeName: '',
      refereeEmail: '',
    },
    validationSchema: Yup.object({
      referrerName: Yup.string().required('Required'),
      referrerEmail: Yup.string().email('Invalid email').required('Required'),
      refereeName: Yup.string().required('Required'),
      refereeEmail: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        console.log('Submitting form', values); // Debugging statement
        const response = await axios.post('http://localhost:3001/api/referrals', values);
        console.log('Response:', response.data); // Debugging statement
        onClose();
      } catch (error) {
        console.error('Error submitting referral', error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="referrerName"
        name="referrerName"
        label="Your Name"
        value={formik.values.referrerName}
        onChange={formik.handleChange}
        error={formik.touched.referrerName && Boolean(formik.errors.referrerName)}
        helperText={formik.touched.referrerName && formik.errors.referrerName}
        margin="normal"
      />
      <TextField
        fullWidth
        id="referrerEmail"
        name="referrerEmail"
        label="Your Email"
        value={formik.values.referrerEmail}
        onChange={formik.handleChange}
        error={formik.touched.referrerEmail && Boolean(formik.errors.referrerEmail)}
        helperText={formik.touched.referrerEmail && formik.errors.referrerEmail}
        margin="normal"
      />
      <TextField
        fullWidth
        id="refereeName"
        name="refereeName"
        label="Friend's Name"
        value={formik.values.refereeName}
        onChange={formik.handleChange}
        error={formik.touched.refereeName && Boolean(formik.errors.refereeName)}
        helperText={formik.touched.refereeName && formik.errors.refereeName}
        margin="normal"
      />
      <TextField
        fullWidth
        id="refereeEmail"
        name="refereeEmail"
        label="Friend's Email"
        value={formik.values.refereeEmail}
        onChange={formik.handleChange}
        error={formik.touched.refereeEmail && Boolean(formik.errors.refereeEmail)}
        helperText={formik.touched.refereeEmail && formik.errors.refereeEmail}
        margin="normal"
      />
      <Box textAlign="center" mt={3}>
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default ReferForm;
