import { useEffect, useState } from "react";
import "../styles/ListingDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { facilities } from "../data";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const ListingDetails = () => {
  const [loading, setLoading] = useState(true);

  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [userDetails, setUserDetails] = useState(""); // New state variable for the textbox

  const getListingDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/${listingId}`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      setListing(data);
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  console.log(listing);

  /* SUBMIT BOOKING */
  const customerId = useSelector((state) => state?.user?._id);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const bookingForm = {
        customerId,
        listingId,
        hostId: listing.creator._id,
        userDetails,
      };

      const response = await fetch("http://localhost:3001/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      });

      if (response.ok) {
        navigate(`/${customerId}/trips`);
        alert("the owner will contact you soon.");
      }
    } catch (err) {
      console.log("Submit Booking Failed.", err.message);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />

      <div className="listing-details">
        <div className="title">
          <h1>{listing.title}</h1>
          <div></div>
        </div>

        <div className="photos">
          {listing.listingPhotoPaths?.map((item) => (
            <img
              src={`http://localhost:3001/${item.replace("public", "")}`}
              alt="listing photo"
            />
          ))}
        </div>

        <h2>
          {listing.type} in {listing.city}, {listing.province},{" "}
          {listing.country}
        </h2>
        <br></br>
        <h2>
          Rent: <span style={{ color: "red" }}>{listing.price}</span> per month
        </h2>

        <p className="details-info">
          <span className="detail-item">
            <span className="icon">👥</span>
            {listing.guestCount} guests
          </span>
          <span className="detail-item">
            <span className="icon">🛏️</span>
            {listing.bedroomCount} bedroom(s)
          </span>
          <span className="detail-item">
            <span className="icon">🛌</span>
            {listing.bedCount} bed(s)
          </span>
          <span className="detail-item">
            <span className="icon">🛁</span>
            {listing.bathroomCount} bathroom(s)
          </span>
        </p>

        <hr />

        <div className="profile">
          <img
            src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
              "public",
              ""
            )}`}
            alt={`${listing.creator.firstName} ${listing.creator.lastName}`}
          />
          <h3>
            Hosted by {listing.creator.firstName} {listing.creator.lastName}
          </h3>
        </div>
        <hr />

        <h3>Description</h3>
        <p>{listing.description}</p>
        <hr />

        <h3>{listing.highlight}</h3>
        <p>{listing.highlightDesc}</p>
        <hr />

        <div className="booking">
          <div>
            <h2>What this place offers?</h2>
            <div className="amenities">
              {listing.amenities[0].split(",").map((item, index) => (
                <div className="facility" key={`${index}-${item}`}>
                  <div className="facility_icon">
                    {
                      facilities.find((facility) => facility.name === item)
                        ?.icon
                    }
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2>Share your Contact details</h2>
            <textarea
              type="text"
              placeholder="Your Contact details"
              name="details"
              required
              value={userDetails} // Bind the value to the state
              onChange={(e) => setUserDetails(e.target.value)} // Update the state on change
            />
            <p>
              <span style={{ color: "red" }}>
                *Make sure to add your contact number and email id
              </span>
            </p>
          </div>
          <div>
            <button className="button" type="submit" onClick={handleSubmit}>
              Reserve
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ListingDetails;
