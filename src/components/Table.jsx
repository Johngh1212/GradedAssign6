import "./styling.css"; 

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          {/* Table header with four columns */}
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping through satellite data to render rows */}
        {sat.map((data, id) => (
          <tr key={id}>
            {/* Table data cells */}
            <td>{data.name}</td>
            <td>{data.type}</td> 
            <td>{data.launchDate}</td>
            {/* Conditional statement for satellite status */}
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

