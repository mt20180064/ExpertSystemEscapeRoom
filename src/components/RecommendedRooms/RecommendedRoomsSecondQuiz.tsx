import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Room } from '../../types';

const RecommendedRoomsContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
`;

const RoomGroupContainer = styled.div`
  margin-bottom: 2rem;
  border: 1px solid red; /* Add border for debugging */
`;

const RoomGroupTitle = styled.h4`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const RoomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const RoomImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 150px;
`;

const RoomImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 100px;
`;

const RoomNameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
`;

const RoomLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

interface RecommendedRoomsProps {
  rooms: Room[];
}

const RecommendedRoomsSecondQuiz: FC<RecommendedRoomsProps> = ({ rooms }) => {
  const groupedRooms = rooms.reduce((groups, room) => {
    if (!room.location) {
      console.warn(`Room with id ${room.id} has a null location.`);
      return groups;
    }

    const locId = room.location.id;
    if (!groups[locId]) {
      groups[locId] = { location: room.location, rooms: [] };
    }
    groups[locId].rooms.push(room);
    return groups;
  }, {} as Record<number, { location: { id: number, address: string, company: string }, rooms: Room[] }>);

  useEffect(() => {
    console.log("Grouped Rooms:", groupedRooms);
  }, [groupedRooms]);

  return (
    <RecommendedRoomsContainer>
      {Object.entries(groupedRooms).map(([locId, { location, rooms }]) => (
        <RoomGroupContainer key={locId}>
          <RoomGroupTitle>Lokacija {location.id}: {location.address}</RoomGroupTitle>
          <RoomRow>
            {rooms.map((room) => (
              <RoomLink key={room.id} href="https://www.google.com">
                <RoomImageContainer>
                  <RoomImage src={room.imageUrl} alt={room.name} />
                  <RoomNameOverlay>{room.name}</RoomNameOverlay>
                </RoomImageContainer>
              </RoomLink>
            ))}
          </RoomRow>
        </RoomGroupContainer>
      ))}
    </RecommendedRoomsContainer>
  );
}

export default RecommendedRoomsSecondQuiz;






