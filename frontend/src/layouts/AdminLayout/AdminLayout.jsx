import PropTypes from "prop-types";

export function AdminLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2>Usando Admin</h2>
      {children}
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
