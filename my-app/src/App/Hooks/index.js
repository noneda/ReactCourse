import "./base.css";

const Events = () => {
  const handleInputSub = (e) => {
    console.log("Input Handle Activate");
    console.log(e.target.value);
  };

  const handleButton = () => {
    alert("Activate Button");
  };

  const handleFormSubmit = () => {
    console.log("Form Submit");
  };

  return (
    <>
      <section>
        <form onSubmit={handleFormSubmit}>
          <h2>Typical Form</h2>
          <input
            type="text"
            name="example"
            onChange={handleInputSub}
            style={{ margin: "1rem 0" }}
          />
          <button type="submit">Submit</button>
        </form>

        <button onClick={handleButton}>Click Me</button>
      </section>
    </>
  );
};

export default Events;
