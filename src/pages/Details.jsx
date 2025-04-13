import { useLocation } from 'react-router-dom';
import Button from '../components/Button';

export default function CityDetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cityId = searchParams.get('cityId');
  
  const { cityData } = location.state || {};

  return (
    <div className="min-h-screen bg-[#e2e8f0] flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-red-900 mb-4">City Details</h1>
        
        <div className="space-y-4">
          <p className="text-lg">
            <span className="font-semibold">City ID:</span> {cityId}
          </p>
          <p className="text-lg">
            <span className="font-semibold">City Name:</span> {cityData?.name || 'N/A'}
          </p>
          
          <div className="mt-6 p-4 bg-yellow-100 border-2 border-yellow-300 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-700">🚧 Under Construction 🚧</h2>
            <p className="text-yellow-800 mt-2">
              More details about this city are coming soon!
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <Button ruta="/cities" text="Back to Cities" />
        </div>
      </div>
    </div>
  );
}