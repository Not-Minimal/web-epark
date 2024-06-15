import PropTypes from "prop-types";

export function GuardLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2>Usando Guardia</h2>
      {children}
    </div>
  );
}

GuardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
