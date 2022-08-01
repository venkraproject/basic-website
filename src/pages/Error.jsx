const Error = (props) => {
  const { message } = props
  return (
    <section className='section'>
      <h2>404</h2>
      <p>Page not found</p>
      <p>{message}</p>
    </section>
  );
};
export default Error;
