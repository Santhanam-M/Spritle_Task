const Table = (props) => {
  const { monitorData } = props;

  if (monitorData.length === 0) {
    return (
      <p className="text-danger">
        No Data Found. Please make sure your proxy server is running to fetch
        and update the data for the table.
      </p>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10 col-md-10">
        <div className="table-responsive table-hover striped mt-4 mb-4">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Message</th>
                <th scope="col">Query</th>
                <th scope="col">Owner</th>
              </tr>
            </thead>

            <tbody>
              {monitorData.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td>{ele.name}</td>
                    <td>{ele.type}</td>
                    <td>{ele.message}</td>
                    <td>{ele.query}</td>
                    <td>{ele.creator.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
