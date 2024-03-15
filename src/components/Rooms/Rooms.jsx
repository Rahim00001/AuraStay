/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useEffect } from "react";
import RoomCard from "./RoomCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    useEffect(() => {
        fetch('../../../public/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filteredRooms = data.filter(room => room.category === category)
                    setRooms(filteredRooms)
                } else setRooms(data)
            })
    }, [category])
    return (
        <Container>
            {rooms && rooms.length > 0 ? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)}
            </div> : <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
                <Heading
                    center={true}
                    title={'No Rooms Available In This Category'}
                    subtitle={'Please Select Other Categories'}></Heading>
            </div>}
        </Container>
    );
};

export default Rooms;