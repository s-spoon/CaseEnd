
function DetailContent({ data = {} }) {
  return (
    <div className='pl-2 pt-2 w-full flex flex-col order-first sm:order-last'>
      <div className='flex'>
        <div className='max-h-96 flex justify-center w-full'>
          <img
            className='object-contain h-full'
            src={`https://raw.caseend.com/media/${data?.brand_slug}/${data?.slug}/${data?.slug}.png`}
            width='800'
            height='800'
            data-xblocker='passed'
            style={{ visibility: 'visible' }}
            alt="slug"
          />
        </div>
        <div className='flex flex-col overflow-y-auto overflow-x-hidden max-h-96 py-1 pr-2 w-24 sm:w-36'>
          <img
            className='border border-gray-800 shadow cursor-pointer mb-1.5 bg-gray-200'
            src={`https://raw.caseend.com/media/${data?.brand_slug}/${data?.slug}/${data?.slug}.png`}
            width='800'
            height='800'
            data-xblocker='passed'
            style={{ visibility: 'visible' }}
            alt="slug"
          />
        </div>
      </div>
      <div>
        <div className='text-xs pl-1 pr-2 flex'>
          <span className='flex-shrink-0 mr-4'>
            Last modified: 10/18/2022, 11:31:02 PM
          </span>
          <a
            className='ml-auto max-w-xs truncate'
            href={data?.url}
            target='_blank' rel='noreferrer'
          >
            {data?.url}
          </a>
        </div>
        <div className='flex flex-wrap border-t border-gray-800 my-1 sm:flex-nowrap'>
          <ul className='px-2 py-4 flex flex-col flex-grow font-mono'>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>Name</span>
              <span>{data?.name}</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>Size</span>
              <span>135MM(W) x 193MM(D) x 270MM(H)</span>
              {/* <span>-</span> */}
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Package Size
              </span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>Volume</span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Package Volume
              </span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>Weight</span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Package Weight
              </span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Motherboard
              </span>
              <span>ITX - 170MM(W) x 210MM(L)</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Power Supply
              </span>
              <span>ATX 12V - 150MM(W) x 140MM(L) x 86MM(H)</span>
            </li>
          </ul>
          <div className='flex flex-col max-w-sm'>
            <div className='my-auto'>
              <svg
                className='w-full font-mono'
                version='1.1'
                baseProfile='full'
                text-anchor='middle'
                viewBox='0 0 240 280'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='50'
                  y='50'
                  width='170'
                  height='210'
                  rx='5'
                  ry='5'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='110'
                  y='100'
                  width='50'
                  height='50'
                  rx='4'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='188'
                  y='58'
                  width='8'
                  height='135'
                  rx='2'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='200'
                  y='58'
                  width='8'
                  height='135'
                  rx='2'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='50'
                  y='65'
                  width='20'
                  height='15'
                  rx='1'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='50'
                  y='90'
                  width='15'
                  height='13'
                  rx='1'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='50'
                  y='108'
                  width='15'
                  height='13'
                  rx='1'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='50'
                  y='135'
                  width='25'
                  height='15'
                  rx='1'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='50'
                  y='155'
                  width='25'
                  height='15'
                  rx='1'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='50'
                  y='180'
                  width='30'
                  height='10'
                  rx='1'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='78'
                  y='205'
                  width='115'
                  height='10'
                  rx='2'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='78'
                  y='225'
                  width='115'
                  height='10'
                  rx='2'
                  ry='2'
                ></rect>
                <rect
                  className='stroke-gray-800 fill-transparent'
                  x='78'
                  y='245'
                  width='115'
                  height='10'
                  rx='2'
                  ry='2'
                ></rect>
                <text className='fill-gray-800' x='135' y='20'>
                  {data?.motherboard_width}MM
                </text>
                <path
                  className='stroke-gray-800 fill-transparent'
                  d='M50 40
                                                                      V30
                                                                      H220
                                                                      V40'
                ></path>
                <text
                  className='fill-gray-800'
                  x='20'
                  y='155'
                  transform='rotate(-90,20,155)'
                >
                  {data?.motherboard_length}MM
                </text>
                <path
                  className='stroke-gray-800 fill-transparent'
                  d='M40 50
                                                                      H30
                                                                      V260
                                                                      H40'
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap border-t border-gray-800 my-1 sm:flex-nowrap'>
          <ul className='px-2 py-4 flex flex-col flex-grow font-mono'>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                CPU Max Height
              </span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Liquid Cooling
              </span>
              <span>280MM</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                GPU Max Size
              </span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                PCI-E Riser
              </span>
              <span>Not require</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Main PCI-E Slot
              </span>
              <span>2</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Main Low-profile PCI-E Slot
              </span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Extra PCI-E Slot
              </span>
              <span>-</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Extra Low-profile PCI-E Slot
              </span>
              <span>-</span>
            </li>
          </ul>
        </div>
        <div className='flex border-t border-gray-800 my-1'>
          <ul className='px-2 py-4 flex flex-col flex-grow font-mono'>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>Status</span>
              <span>available</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>USB-C</span>
              <span>No</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Skeleton Material
              </span>
              <span>Aluminum</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Shell Material
              </span>
              <span>Aluminum</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>Open</span>
              <span>Yes</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Solid Panel
              </span>
              <span>No</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Mesh Panel
              </span>
              <span>No</span>
            </li>
            <li className='flex flex-wrap'>
              <span className='font-bold mr-2 my-1 w-full lg:w-72'>
                Transport Panel
              </span>
              <span>No</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
