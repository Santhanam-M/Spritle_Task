const Table = (props) => {
 const {monitorData} = props

 
 if (monitorData.length === 0) {
  return <p>No Data Found</p>;
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
                {monitorData.map((ele)=>{
                  return <tr key={ele.id}>
                            <td>{ele.name}</td>
                            <td>{ele.type}</td>
                            <td>{ele.message}</td>
                            <td>{ele.query}</td>
                            <td>{ele.creator.name}</td>
                          </tr>
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
