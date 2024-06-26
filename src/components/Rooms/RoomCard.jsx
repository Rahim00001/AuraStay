/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
    return (
        <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                    <img
                        className='object-cover h-full w-full group-hover:scale-110 transition'
                        src={room.image}
                        alt='Room'
                    />
                    <div className='absolute top-3 right-3'></div>
                </div>
                <div className='font-semibold text-lg'>{room.location}</div>
                <div className='flex flex-row items-center justify-between gap-1'>
                    <div className='font-semibold text-neutral-500'>{room.category}</div>
                    <div className='font-bold'>$ {room.price}</div>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;