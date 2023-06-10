import React from 'react';

const UserCard = ({ owner, point }) => {
    const getImageSrc = () => {
        if (owner.userImage.startsWith('http')) {
            return owner.userImage;
        } else {
            owner.userImage = `https://7team-bucket.s3.ap-northeast-2.amazonaws.com/${user.userImage}`;
            return owner.userImage;
        }
    };
    return (
        <div
            className="flex items-center justify-center p-4 m-2 bg-white shadow-2xl rounded-xl"
            style={{ width: '60vh', height: '60vh' }}>
            <div className="flex flex-col justify-center items-center text-center">
                <img className="w-20 h-20 object-cover rounded-full mb-2" src={getImageSrc()} alt={owner.id} />
                <h2 className="text-lg font-bold">{owner.nickname}</h2>
                <p className="text-sm text-gray-500">{point}</p>
            </div>
        </div>
    );
};

export default UserCard;
