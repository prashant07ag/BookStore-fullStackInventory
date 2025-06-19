const SideBar = () => {
    const customTheme = {
      sidebar: {
        root: {
          base: 'h-full bg-black text-white',
        },
        item: {
          base: 'flex items-center justify-start rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800',
          active: 'bg-blue-600 text-white',
          icon: 'mr-2 h-5 w-5',
        },
      },
    };
  
    return (
      <Flowbite theme={{ theme: customTheme }}>
        <Sidebar aria-label="Sidebar">
          <Sidebar.Logo img={profile} imgAlt="Logo" />
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiViewBoards}>
                Upload Books
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                Manage Books
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="/logout" icon={HiTable}>
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Flowbite>
    );
  };
  
  export default SideBar;