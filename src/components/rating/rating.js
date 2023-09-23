const Rating = () => {

    const [values, setValues] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      
        <Rating
            names="simple-controlled"
            values={values}
            onChange={(events, newValueR) => {
            setValue(newValueR);
            }}
        />
          
    );
  }
  
  export default Rating;