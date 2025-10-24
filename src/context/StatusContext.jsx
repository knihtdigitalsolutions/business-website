import { createContext, useContext, useState, useEffect } from 'react';

const StatusContext = createContext({});

export const StatusProvider = ({ children }) => {
  //state for the side nav
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const [isRightSideNavOpen, setIsRightSideNavOpen] = useState(true);
  // state for loading
  //auth loading
  const [loadCheckAuth, setLoadCheckAuth] = useState(false);
  //dashboard loading
  const [loading, setLoading] = useState(false);
  // refresh the patient context
  const [regPatLoading, setRegPatLoading] = useState(true);

  // state for authentication
  const [logIn, setLogin] = useState('');
  const [checkLogIn, setCheckLogin] = useState('');
  const [logOut, setLogOut] = useState(false);

  //for the user
  const [selectedUser, setSelectedUser] = useState(null);
  const [openUserList, setOpenUserList] = useState(true);
  const [openRegisterUser, setOpenRegisterUser] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);

  //for the Receptionist
  const [openReceptionDash, setOpenReceptionDash] = useState(true);
  const [openCheckIn, setOpenCheckIn] = useState(false);

  // State for the finance
  //state for opening and closing the different finance components
  const [selectedFinance, setSelectedFinance] = useState(null);
  const [openFinanceList, setOpenFinanceList] = useState(true);
  const [openRegisterFinance, setOpenRegisterFinance] = useState(false);
  const [openEditFinance, setOpenEditFinance] = useState(false);

  // State for the lab
  //state for opening and closing the different lab views
  const [selectedDiag, setSelectedDiag] = useState(null);
  const [openPatList, setOpenPatList] = useState(true);
  const [openRegisterView, setOpenRegisterView] = useState(false);
  const [openEditPatModal, setOpenEditPatModal] = useState(false);
  const [openDiagnosticsView, setOpenDiagnosticsView] = useState(false);
  const [openRegisterDiagnostics, setOpenRegisterDiagnostics] = useState(false);
  const [openEditTest, setOpenEditTest] = useState(false);
  const [openAllDiagView, setOpenAllDiagView] = useState(false);

  const [singlePatRec, setSinglePatRec] = useState(false);

  //state for selected modal patient
  const [selectedPatient, setSelectedPatient] = useState(null);
  //state for the diagnostics
  const [currentTest, setCurrentTest] = useState(true);

  //state for opening and closing the different pharmacy views
  const [openDrugList, setOpenDrugList] = useState(true);
  const [openRegisterDrugCat, setOpenRegisterDrugCat] = useState(false);
  const [openRegisterDrug, setOpenRegisterDrug] = useState(false);
  const [openDrugCategory, setOpenDrugCategory] = useState(false);
  const [openStockIn, setOpenStockIn] = useState(true);
  const [openStockOut, setOpenStockOut] = useState(false);
  const [openTakeStock, setOpenTakeStock] = useState(false);
  const [openTakeStockModal, setOpenTakeStockModal] = useState(false);
  const [openEditDrugModal, setOpenEditDrugModal] = useState(false);
  const [openEditDrugCatModal, setOpenEditDrugCatModal] = useState(false);
  const [openEditStockOutModal, setOpenEditStockOutModal] = useState(false);
  //for the test input section
  const [openTestList, setOpenTestList] = useState(false);
  const [openRegTestList, setOpenRegTestList] = useState(false);

  // state for the deleted status of the patient
  const [deletedPatient, setDeletedPatient] = useState(true);
  // state for the deleted status of the diagnostic
  const [deletedDiag, setDeletedDiag] = useState(true);
  // state for the deleted status of the diagnostic
  const [deletedDrugCat, setDeletedDrugCat] = useState(true);
  // state for the deleted status of the diagnostic
  const [deletedDrug, setDeletedDrug] = useState(true);

  // state for dashboard or first page
  const [dashNavBtnOne, setDashNavBtnOne] = useState(true);
  const [dashNavBtnTwo, setDashNavBtnTwo] = useState(false);
  const [dashNavBtnThree, setDashNavBtnThree] = useState(false);
  const [openLab, setOpenLab] = useState(true);
  const [openPharmacy, setOpenPharmacy] = useState(false);

  const [activeComponent, setActiveComponent] = useState('Dash');

  useEffect(() => {
    setActiveComponent(() => {
      const storedComponent = localStorage.getItem('activeComponent');
      return storedComponent ? storedComponent : 'Dash';
    });
  }, [activeComponent]);

  //for the printing state
  const [isPrinting, setIsPrinting] = useState(false);
  const [openPrintingPage, setOpenPrintingPage] = useState(false);

  return (
    <StatusContext.Provider
      value={{
        isSideNavOpen,
        setIsSideNavOpen,
        isRightSideNavOpen,
        setIsRightSideNavOpen,
        loadCheckAuth,
        setLoadCheckAuth,
        loading,
        setLoading,
        regPatLoading,
        setRegPatLoading,

        logIn,
        setLogin,
        checkLogIn,
        setCheckLogin,
        logOut,
        setLogOut,

        // user states
        selectedUser,
        setSelectedUser,
        openUserList,
        setOpenUserList,
        openRegisterUser,
        setOpenRegisterUser,
        openEditUser,
        setOpenEditUser,

        // recptionist state
        openReceptionDash,
        setOpenReceptionDash,
        openCheckIn,
        setOpenCheckIn,

        //finance states
        selectedFinance,
        setSelectedFinance,
        openFinanceList,
        setOpenFinanceList,
        openRegisterFinance,
        setOpenRegisterFinance,
        openEditFinance,
        setOpenEditFinance,

        //Lab states
        selectedDiag,
        setSelectedDiag,
        openPatList,
        setOpenPatList,
        openRegisterView,
        setOpenRegisterView,
        openEditPatModal,
        setOpenEditPatModal,
        openDiagnosticsView,
        setOpenDiagnosticsView,
        openRegisterDiagnostics,
        setOpenRegisterDiagnostics,
        openEditTest,
        setOpenEditTest,
        openAllDiagView,
        setOpenAllDiagView,
        openTestList,
        setOpenTestList,
        singlePatRec,
        setSinglePatRec,
        selectedPatient,
        setSelectedPatient,
        currentTest,
        setCurrentTest,

        dashNavBtnOne,
        setDashNavBtnOne,
        dashNavBtnTwo,
        setDashNavBtnTwo,
        dashNavBtnThree,
        setDashNavBtnThree,
        openLab,
        setOpenLab,
        openPharmacy,
        setOpenPharmacy,
        activeComponent,
        setActiveComponent,

        // pharmacy
        openEditDrugCatModal,
        setOpenEditDrugCatModal,
        openDrugList,
        setOpenDrugList,
        openRegisterDrugCat,
        setOpenRegisterDrugCat,
        openRegisterDrug,
        setOpenRegisterDrug,
        openDrugCategory,
        setOpenDrugCategory,
        openStockIn,
        setOpenStockIn,
        openStockOut,
        setOpenStockOut,
        openTakeStock,
        setOpenTakeStock,
        openTakeStockModal,
        setOpenTakeStockModal,
        openEditDrugModal,
        setOpenEditDrugModal,
        openEditStockOutModal,
        setOpenEditStockOutModal,
        openRegTestList,
        setOpenRegTestList,
        deletedPatient,
        setDeletedPatient,
        deletedDiag,
        setDeletedDiag,
        deletedDrug,
        setDeletedDrug,
        deletedDrugCat,
        setDeletedDrugCat,

        isPrinting,
        setIsPrinting,
        openPrintingPage,
        setOpenPrintingPage,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};
export const useStatusContext = () => {
  return useContext(StatusContext);
};
export default StatusContext;
