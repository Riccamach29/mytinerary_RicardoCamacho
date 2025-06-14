import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children }) {
    const token = useSelector((state) => state.auth.token);

    if (token) {
        return <Navigate to="/cities" />;
    }
    return children;
}




