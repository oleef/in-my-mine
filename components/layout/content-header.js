const ContentHeader = ({ pageTitle }) => {
  return (
    <div className="content-header">
      <div className="container">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">{pageTitle}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Layout</a>
              </li>
              <li className="breadcrumb-item active">Top Navigation</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentHeader;
