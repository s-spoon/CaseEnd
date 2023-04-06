function SideBar() {
  return (
    <aside className='w-full my-2 h-72 overflow-y-auto scrollbar-hide border-b border-gray-800 flex-shrink-0 sm:w-64 sm:pr-2 sm:border-b-0 sm:border-r sm:h-[calc(100vh-1rem)] sm:sticky sm:top-2'>
      <div className='flex items-center text-xs border-b border-gray-800 pb-2 px-2 sticky top-0 bg-white  sm:pr-0'>
        <button className='px-2 py-1 mr-2 button-checked' type='button'>
          Volume↑
        </button>
        <button className='px-2 py-1 button' type='button'>
          Volume↓
        </button>
        <button className='px-2 py-1 ml-auto button' type='button'>
          Reset
        </button>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>1. Motherboard</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            ITX
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            M-ATX
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            ATX
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            E-ATX
          </button>
        </div>
        <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='L'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>2. Power Supply</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Included
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            DC
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Flex ATX
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            SFX
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            SFX-L
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            ATX 12V
          </button>
        </div>
        <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='L'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='H'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>3. Structure</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Traditional
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            A4
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Front PSU
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Workstation
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            NAS
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Sub Region
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Horizontal
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            Vertical
          </button>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>4. Volume</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            5L
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            10L
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            15L
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            20L
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            &gt;20L
          </button>
        </div>
        <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='D'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='H'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>5. Side Panel</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Open
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Mesh
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Transparent
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            Solid
          </button>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>6. Liquid Cooling</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            120MM
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            140MM
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            240MM
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            280MM
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            360MM
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            420MM
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            Air Cooling
          </button>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>7. Skeleton Material</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Plastic
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Steel
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Aluminum
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            Other
          </button>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>8. Shell Material</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Plastic
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Steel
          </button>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            Aluminum
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            Other
          </button>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>9. Slot</h3>
        <div className='pl-2 flex flex-col'>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Main Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Extra Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Main Low-profile Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Extra Low-profile Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>10. GPU&amp;CPU</h3>
        <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='H'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='L'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div>
        <div className='pl-2 flex flex-col'>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='CPU Max Height'
              min='0'
              max='999'
              value=''
            />
          </div>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>11. Extra</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            USB-C
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            Available
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
