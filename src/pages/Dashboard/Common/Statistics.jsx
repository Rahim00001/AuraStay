import useRole from '../../../hooks/useRole'
import { Helmet } from 'react-helmet-async'
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics'
import HostStatistics from '../../../components/Dashboard/Statistics/HostStatistics'

const Statistics = () => {
    const [role] = useRole()
    console.log(role)
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {role === 'admin' && <AdminStatistics />}
            {role === 'host' && <HostStatistics />}
        </div>
    )
}

export default Statistics