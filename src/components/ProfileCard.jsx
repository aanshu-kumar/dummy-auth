import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <div className="w-2/3  flex flex-col">
      <div className=" bg-gray-900 border-2 border-gray-800 rounded-2xl p-10 w-full flex gap-6  ">
        <img
          className=" rounded-4xl border-2 border-gray-500 object-cover"
          src={data.image}></img>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl">
            {data.firstName} {data.lastName}
          </h2>
          <p className="font-thin">
            <i>{data.email}</i>
          </p>
          <p>{data.role}</p>
        </div>
      </div>
      <div className="w-full flex mt-5 gap-6">
        <div className=" w-1/2 bg-gray-900 border-2 border-gray-800 rounded-2xl p-10 space-y-2">
          <h3 className="text-xl font-bold text-gray-500">
            General Information:
          </h3>
          <hr className="my-2" />
          <p>
            First name:{" "}
            <span className="font-semibold text-white">{data.firstName}</span>
          </p>
          <p>
            Last name:{" "}
            <span className="font-semibold text-white">{data.lastName}</span>
          </p>
          <p>
            Age: <span className="font-semibold text-white">{data.age}</span>
          </p>
          <p>
            Gender:{" "}
            <span className="font-semibold text-white">{data.gender}</span>
          </p>
          <p>
            Date of Birth:{" "}
            <span className="font-semibold text-white">{data.birthDate}</span>
          </p>
        </div>
        <div className=" w-full bg-gray-900 border-2 border-gray-800 rounded-2xl p-10 space-y-2">
          <h3 className="text-xl font-bold text-gray-500">
            Contact Information:
          </h3>
          <hr className="my-2" />
          <p>
            Phone Number:{" "}
            <span className="font-semibold text-white">{data.phone}</span>
          </p>
          <p>
            Email Id:{" "}
            <span className="font-semibold text-white">{data.email}</span>
          </p>
          <p>
            Address : {" "}
            <span className="font-semibold text-white">{data.address.address}, {data.address.city}, {data.address.state}.</span>
          </p>
          <p>
            Postal Code:{" "}
            <span className="font-semibold text-white">{data.address.postalCode}</span>
          </p>
          <p>
            Country of Origin:{" "}
            <span className="font-semibold text-white">{data.address.country}</span>
          </p>

        </div>
      </div>
      <div className="w-full flex mt-5 gap-6">
        <div className=" w-full bg-gray-900 border-2 border-gray-800 rounded-2xl p-10 space-y-2">
        <h3 className="text-xl font-bold text-gray-500">
            Health Information:
          </h3>
          <hr className="my-2" />
          <p>
            Height:{" "}
            <span className="font-semibold text-white">{data.height}</span>
          </p>
          <p>
            Weight:{" "}
            <span className="font-semibold text-white">{data.weight}</span>
          </p>
          <p>
            Eye color : {" "}
            <span className="font-semibold text-white">{data.eyeColor}</span>
          </p>
        </div>
        <div className={` w-1/2 bg-[${data.eyeColor}]  border-2 border-gray-800 rounded-2xl p-5 space-y-2 flex items-end justify-end`}><p>Eye color</p></div>
      </div>
      <div className="w-full flex mt-5 gap-6">
        <div className=" w-full bg-gray-900 border-2 border-gray-800 rounded-2xl p-10 space-y-2">
        <h3 className="text-xl font-bold text-gray-500">
            Work Experience:
          </h3>
          <hr className="my-2" />
          <p>
          Department:{" "}
            <span className="font-semibold text-white">{data.company.department}</span>
          </p>
          <p>
            Name:{" "}
            <span className="font-semibold text-white">{data.company.name}</span>
          </p>
          <p>
            Title: {" "}
            <span className="font-semibold text-white">{data.company.title}</span>
          </p>
          <p>
            Company Address : {" "}
            <span className="font-semibold text-white">{data.company.address.address}, {data.company.address.city}, {data.company.address.state} - {data.company.country}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
