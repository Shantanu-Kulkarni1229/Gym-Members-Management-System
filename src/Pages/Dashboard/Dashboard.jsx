import React,{useState , useEffect , useRef} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ErrorIcon from '@mui/icons-material/Error';
import ReportIcon from '@mui/icons-material/Report';

const Dashboard = () => {
const [accordianDashboard, setaccordianDashboard] = useState(false);
const ref = useRef();

useEffect(() => {

const checkIfClickedOutside = (event) => {
    if (accordianDashboard && ref.current && !ref.current.contains(event.target)) {
      setaccordianDashboard(false);
    }
  };
  
  document.addEventListener("mousedown", checkIfClickedOutside);
  
  return () => {
    document.removeEventListener("mousedown", checkIfClickedOutside);
  };



}, [accordianDashboard]);
  return (
    <div className='w-3/4 text-black p-5 relative'>
      {/* Top Navbar */}
      <div className='w-full bg-slate-900 text-white rounded-lg flex p-3 justify-between items-center'>
        <MenuIcon sx={{cursor:'pointer'}} onClick={()=> {setaccordianDashboard(prev => !prev)}}  />
        <img
          src="https://imgs.search.brave.com/jAVnHpCRV6l5hN5Jg42BbKTyBKHTe8y0x8ffsiIkjUA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduZXZvLmNv/bS9yZXMvdGVtcGxh/dGVzL3RodW1iX3Nt/YWxsL29yYW5nZS1j/aXJjbGUtYW5kLWZp/dG5lc3MtZXF1aXBt/ZW50LndlYnA"
          alt="Profile"
          className='w-8 h-8 rounded-3xl border-2'
        />
      </div>
      {
        accordianDashboard &&
        <div ref={ref} className='absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight '>
        <div>Hi welcome to our Gym amangement system</div>
        <p>
          Feel free to ask any queries
        </p>
      </div>}

      {/* Grid Section */}
      <div className='mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]'>

        {/* Card 1 - Joined Members */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className='h-3 rounded-t-lg bg-blue-600'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
            <PeopleAltIcon sx={{ fontSize: 50, color: 'green' }} />
            <p className='text-xl my-3 font-semibold font-mono'>Joined Members</p>
          </div>
        </div>

        {/* Card 2 - Monthly Joined Members */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className='h-3 rounded-t-lg bg-blue-600'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
            <SignalCellularAltIcon sx={{ fontSize: 50, color: 'purple' }} />
            <p className='text-xl my-3 font-semibold font-mono'>Monthly Joined Members</p>
          </div>
        </div>

        {/* Card 3 - Expiry within 3 days */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className='h-3 rounded-t-lg bg-blue-600'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
            <AccessAlarmIcon sx={{ fontSize: 50, color: 'red' }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expiry within 3 days</p>
          </div>
        </div>

        {/* Card 4 - Expiry within 4–7 days */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className='h-3 rounded-t-lg bg-blue-600'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
            <AccessAlarmIcon sx={{ fontSize: 50, color: 'red' }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expiry within 4–7 days</p>
          </div>
        </div>

        {/* Card 5 - Expired */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className='h-3 rounded-t-lg bg-blue-600'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
            <ErrorIcon sx={{ fontSize: 50, color: 'red' }} />
            <p className='text-xl my-3 font-semibold font-mono'>Expired</p>
          </div>
        </div>

        {/* Card 6 - Inactive Members */}
        <div className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer">
          <div className='h-3 rounded-t-lg bg-blue-600'></div>
          <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
            <ReportIcon sx={{ fontSize: 50, color: 'red' }} />
            <p className='text-xl my-3 font-semibold font-mono'>Inactive Members</p>
          </div>
        </div>

      </div>
      {/* Bottom Section */}
      <div className="md:bottom-4 p-4 w-3/4 md:mb-0 absolute bg-black text-white mt-20 rounded-xl  text-xl"></div>
    </div>
  );
};

export default Dashboard;
