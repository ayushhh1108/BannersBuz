import { Pagination } from "react-bootstrap";

function Paginationn() {
  return (
    <div className="mx-auto">
      <Pagination className="mx-auto my-4 flex-wrap">
        <Pagination.First className="pagination-primary" />
        <Pagination.Prev className="pagination-primary" />
        <Pagination.Item  className="pagination-primary">{1}</Pagination.Item>
        <Pagination.Ellipsis className="pagination-primary" />

        <Pagination.Item className="pagination-primary">{10}</Pagination.Item>
        <Pagination.Item className="pagination-primary">{11}</Pagination.Item>
        <Pagination.Item active  className="pagination-primary-active">{12}</Pagination.Item>
        <Pagination.Item  className="pagination-primary">{13}</Pagination.Item>
        <Pagination.Item className="pagination-primary" disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis className="pagination-primary" />
        <Pagination.Item className="pagination-primary">{20}</Pagination.Item>
        <Pagination.Next className="pagination-primary" />
        <Pagination.Last className="pagination-primary" />
      </Pagination>
    </div>
  );
}

export default Paginationn;
