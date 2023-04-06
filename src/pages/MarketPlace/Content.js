import { Col, Row } from 'antd';
import ContentItem from './ContentItem';
import { useSelector } from 'react-redux';

function Content() {
  const products = useSelector((store) => store?.products?.results);
  return (
    <div className='p-4'>
      <Row gutter={[8, 8]}>
        {products?.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={8} lg={6}>
            <ContentItem data={item} />
          </Col>
        ))}
      </Row>
      <nav className='flex py-2 mt-4 text-xs'>
        <button className='invisible w-full py-2 button mr-2'>First</button>
        <button className='invisible w-full py-2 button'>Prev</button>
        <input className='w-16 px-2 py-0 mx-4' type='number' value='1' />
        <button className='w-full py-2 button mr-2'>Next</button>
        <button className='w-full py-2 button'>Last</button>
      </nav>
    </div>
  );
}

export default Content;
