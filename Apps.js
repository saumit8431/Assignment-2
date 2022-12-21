import { useFormik } from "formik";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      country: ""
    },
   
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Enter Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="input-container">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          placeholder="Enter your age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <p>{formik.errors.age}</p>
        ) : null}
      </div>
      <div className="input-container">
        <label htmlFor="country">Country</label>
        <select 
        className="input-container" 
        id="country" 
        name="country" 
        type="text"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} >
            <option value="">Choose...</option>
            <option value="IND">India</option>
            <option value="US">United States</option>
            <option value="INS">Indonesia</option>
            <option value="PAK">Pakistan</option>
            <option value="BRZ">Brazil</option>
                  </select> 
        {formik.touched.country && formik.errors.country ? (
          <p>{formik.errors.country}</p>
        ) : null}
      </div>
     
     

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;