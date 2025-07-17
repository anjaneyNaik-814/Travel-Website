import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import PackageDetailsPage from './pages/PackageDetailsPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'destination' | 'package' | 'contact';

interface AppState {
  currentPage: Page;
  selectedDestination: string | null;
  selectedPackage: string | null;
}

function App() {
  const [state, setState] = useState<AppState>({
    currentPage: 'home',
    selectedDestination: null,
    selectedPackage: null,
  });

  const navigateToDestination = (destination: string) => {
    setState({
      currentPage: 'destination',
      selectedDestination: destination,
      selectedPackage: null,
    });
  };

  const navigateToPackage = (packageId: string) => {
    setState({
      ...state,
      currentPage: 'package',
      selectedPackage: packageId,
    });
  };

  const navigateToPage = (page: Page) => {
    setState({
      ...state,
      currentPage: page,
    });
  };

  const navigateHome = () => {
    setState({
      currentPage: 'home',
      selectedDestination: null,
      selectedPackage: null,
    });
  };

  const renderCurrentPage = () => {
    switch (state.currentPage) {
      case 'home':
        return <HomePage onDestinationSelect={navigateToDestination} />;
      case 'destination':
        return (
          <DestinationPage
            destination={state.selectedDestination!}
            onPackageSelect={navigateToPackage}
            onBack={navigateHome}
          />
        );
      case 'package':
        return (
          <PackageDetailsPage
            packageId={state.selectedPackage!}
            onBack={() => setState({ ...state, currentPage: 'destination' })}
          />
        );
      case 'contact':
        return <ContactPage onBack={navigateHome} />;
      default:
        return <HomePage onDestinationSelect={navigateToDestination} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onNavigate={navigateToPage}
        onHome={navigateHome}
        currentPage={state.currentPage}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;