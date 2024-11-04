import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../../styles/BreakPoints';
import { Room } from '../../types'; 

const RecommendedRoomsContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  color: #AA336A; 
  margin-bottom: 1.5rem;
  font-family: 'Arial', sans-serif; 
`;

const RoomList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RoomListItem = styled.li`
  margin-bottom: 2rem; 
`;

const RoomLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const RoomImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;  
  height: 200px;     
`;

const RoomNameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
  padding: 10px;
  font-size: 1.25rem;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const RoomImageContainer = styled.div`
  position: relative;
  overflow: hidden;  
`;

interface RecommendedRoomsProps {
  rooms: Room[];
}

const RecommendedRooms: FC<RecommendedRoomsProps> = ({ rooms }) => {
  const shuffledRooms = rooms.sort(() => 0.5 - Math.random());
  const topRooms = shuffledRooms.slice(0, 3);
  const remainingRooms = shuffledRooms.slice(3);

  return (
    <RecommendedRoomsContainer>
      <SectionTitle>TOP 3 SOBE ZA VAS:</SectionTitle>
      <RoomList>
        {topRooms.map((room) => (
          <RoomListItem key={room.id}>
            <RoomLink href={room.destination}>
              <RoomImageContainer>
                <RoomImage src={room.imageUrl} alt={room.name} />
                <RoomNameOverlay>{room.name}</RoomNameOverlay>
              </RoomImageContainer>
            </RoomLink>
          </RoomListItem>
        ))}
      </RoomList>

      <SectionTitle>evo jos nekih soba koje bi vam se svidele!</SectionTitle>
      <RoomList>
        {remainingRooms.map((room) => (
          <RoomListItem key={room.id}>
            <RoomLink href={room.destination}>
              <RoomImageContainer>
                <RoomImage src={room.imageUrl} alt={room.name} />
                <RoomNameOverlay>{room.name}</RoomNameOverlay>
              </RoomImageContainer>
            </RoomLink>
          </RoomListItem>
        ))}
      </RoomList>
    </RecommendedRoomsContainer>
  );
}

export default RecommendedRooms;




