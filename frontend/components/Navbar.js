import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link href="/">
            <h1 className="text-2xl font-bold">DApp</h1>
        </Link>
      </div>
      <div>
        <Link href="/EmployeeLogin">
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded mr-4">
            Login{' \(Employee\)'}
          </button>
        </Link>
        <Link href="/RegisterOrg">
          <button className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded mr-4">
            Register Organization
          </button>
        </Link>
        <Link href="/OrgPage">
          <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
            Set Organization Details
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
