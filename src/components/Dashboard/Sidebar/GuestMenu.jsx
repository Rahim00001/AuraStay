import MenuItem from "../MenuItem";
import { IoFingerPrintSharp } from "react-icons/io5";
const GuestMenu = () => {
    return (
        <>
            <MenuItem
                icon={IoFingerPrintSharp}
                label='My Bookings'
                address='my-bookings'
            />
        </>
    );
};

export default GuestMenu;