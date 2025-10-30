const Filter = ({ value, onChange }) => (
  <div style={{ marginBottom: 12 }}>
    find countries <input value={value} onChange={onChange} />
  </div>
)

export default Filter
