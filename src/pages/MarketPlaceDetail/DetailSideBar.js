function DetailSideBar({ data }) {
  return (
    <aside class='w-full pr-2 my-2 pt-2 overflow-y-auto scrollbar-hide border-t border-gray-800 flex-shrink-0 sm:w-64 sm:pt-0 sm:border-t-0 sm:border-r sm:sticky sm:top-2 sm:h-[calc(100vh-1rem)]'>
      <div>
        <h3 class='font-bold text-lg pl-2'>JXK</h3>
        <div class='flex text-xs my-2 px-2'>
          <a
            class='px-2 py-1 mr-2 mb-2 button'
            href={data?.url}
            target='_blank'
          >
            Website
          </a>
        </div>
      </div>
      <div>
        <h3 class='font-bold text-lg pl-2'>Where to buy</h3>
        <div class='flex my-2 px-2'>
          <a
            class='px-2 py-1 text-xs mr-2 mb-2 button'
            href={data?.url}
            target='_blank'
          >
            Taobao
          </a>
          <a
            class='px-2 py-1 text-xs mr-2 mb-2 button'
            href={`https://www.superbuy.com/en/page/buy?url=${data?.url}`}
            target='_blank'
          >
            Superbuy
          </a>
        </div>
      </div>
    </aside>
  );
}

export default DetailSideBar;