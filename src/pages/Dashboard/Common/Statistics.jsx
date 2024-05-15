import useRole from '../../../hooks/useRole'
import { Helmet } from 'react-helmet-async'
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'

const Statistics = () => {
    const [role] = useRole()
    console.log(role)
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {role === 'admin' && <AdminStatistics />}
        </div>
    )
}

export default Statistics