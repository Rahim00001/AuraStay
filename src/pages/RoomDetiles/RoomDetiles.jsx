import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Header from "../../components/RoomDetiles/Header";
import RoomInfo from "../../components/RoomDetiles/RoomInfo";
import RoomReservation from "../../components/RoomDetiles/RoomReservation";
import { Helmet } from "react-helmet-async";

const RoomDetiles = () => {
    const room = useLoaderData()
    return (
        <Container>
            <Helmet>
                <title> {`${room.title}`}</title>
            </Helmet>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <Header room={room}></Header>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    {/* room Info */}
                    <RoomInfo room={room}></RoomInfo>
                    {/* Resarvation */}
                    <div className="md:col-span-3 order-first md:order-last mb-10">
                        <RoomReservation room={room}></RoomReservation>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetiles;