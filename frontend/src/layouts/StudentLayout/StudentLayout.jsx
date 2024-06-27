import PropTypes from "prop-types";

export function StudentLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2>Usando Estudiante</h2>
      {children}
    </div>
  );
}

StudentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
