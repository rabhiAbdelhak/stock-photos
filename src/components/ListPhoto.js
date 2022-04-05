import React from "react";
import Loading from "./Loading";
import Photo from "./Photo";

const ListPhoto = ({ loading, photos }) => {
  if (loading) return <Loading />;
  return (
    <>
      <section className="photos">
        {photos.map((photo, index) => {
          return <Photo key={index} {...photo} />;
        })}
      </section>
      <Loading />
    </>
  );
};

export default ListPhoto;
