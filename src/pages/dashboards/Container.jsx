import { useStatusContext } from '../../context/StatusContext';

import { AdminLayout } from '../../layouts/Layout';

import SideNav from '../../components/SideNav';

// Import role-based dashboards
import AdminDash from '../../admin/AdminDash';

// Add more dashboards as needed
const roleComponents = {
  Admin: AdminDash,
};

const Container = ({ role = 'Admin', name, companyName='Life Guide Medical Clinic & Laboratory' }) => {
  const { activeComponent, isSideNavOpen } = useStatusContext();
//   const filteredPatients = tracking.filter(p => p.reason && p.reason !== '');
  
//   const doctorPatients = tracking.filter(
//     p => getLatestTracking(p)?.current_stage === 'Doctor'
//   );
//   const labPatients = tracking.filter(
//     p => getLatestTracking(p)?.current_stage === 'Lab Tecnician'
//   );
//   const dischargePatients = tracking.filter(
//     p => getLatestTracking(p)?.current_stage === 'Discharge'
//   );
  const RoleDashboard = roleComponents[role] || (() => <div>No dashboard available for this role.</div>);
  const windowWidth = window.innerWidth
  return (
    <AdminLayout windowWidth={windowWidth} heading={`${name}'s Account`} role={role}>
      {/* <Toaster /> */}
      <RoleDashboard
        activeComponent={activeComponent}
        role={role}
      />
    </AdminLayout>
  );
};

export default Container;
