export default function HeaderComponent() {
  return(
    <div className='flex px-4 py-3 lg:px-28 lg:py-8 items-center shadow'>
      <div className='w-[30%] border'>Logo</div>
      <div className='w-[70%] border flex justify-end'>
        <div>Links</div>
        <div>Profile</div>
      </div>
    </div>
  )
}