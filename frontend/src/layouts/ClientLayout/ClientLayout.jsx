import PropTypes from "prop-types";

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div>
      <h2>Usando ClientLayout</h2>
      {children}
    </div>
  );
}

ClientLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
