import React, { useState } from "react";
import './Add.css';
import upload from '../../assets/upload.png';
import { X } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

function Add({ url }) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [airline, setAirline] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [travelClass, setTravelClass] = useState('');
  const [flightType, setFlightType] = useState('');
  const [tripType, setTripType] = useState('');
  const [price, setPrice] = useState('');
  const [isPopular, setIsPopular] = useState(false);
  const [features, setFeatures] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);

  const allFeatures = [
    "Baggage included",
    "Easy cancellation policy",
    "Flexible travel dates",
    "In-flight entertainment",
    "Wi-Fi onboard"
  ];

  const toggleFeature = (feature) => {
    if (features.includes(feature)) {
      setFeatures(features.filter(f => f !== feature));
    } else {
      if (features.length < 4) {
        setFeatures([...features, feature]);
      }
    }
  };

  const addDateWithSlots = () => {
    setAvailableDates([...availableDates, { date: '', timeSlots: [''] }]);
  };

  const updateDate = (i, value) => {
    const copy = [...availableDates];
    copy[i].date = value;
    setAvailableDates(copy);
  };

  const updateTimeSlot = (dateIndex, slotIndex, value) => {
    const copy = [...availableDates];
    copy[dateIndex].timeSlots[slotIndex] = value;
    setAvailableDates(copy);
  };

  const addTimeSlot = (i) => {
    const copy = [...availableDates];
    copy[i].timeSlots.push('');
    setAvailableDates(copy);
  };

  const removeDate = (i) => {
    const copy = [...availableDates];
    copy.splice(i, 1);
    setAvailableDates(copy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('airline', airline);
    formData.append('description', description);
    formData.append('duration', duration);
    formData.append('travelClass', travelClass);
    formData.append('flightType', flightType);
    formData.append('tripType', tripType);
    formData.append('price', price);
    formData.append('isPopular', isPopular);
    formData.append('features', JSON.stringify(features));
    formData.append('availableDates', JSON.stringify(availableDates));

    try {
      const response = await axios.post(`${url}/api/flight/add`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response) {
        toast.success("Flight Added Successfully! 🛫");
        setImage(null);
        setAirline("");
        setTitle("");
        setDescription("");
        setDuration("");
        setTravelClass("");
        setFlightType("");
        setTripType("");
        setPrice("");
        setIsPopular(false);
        setFeatures([]);
        setAvailableDates([]);
      }
    } catch (error) {
      console.error("Flight Submit Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
         <form className="add-form" onSubmit={handleSubmit}>
      <div className="add-form-left">
        <p className="section-title">Upload Image</p>
        <label htmlFor="image" className="image-label">
          <img src={image ? URL.createObjectURL(image) : upload} alt="upload" className="upload-preview" />
        </label>
        <input type="file" hidden id="image" required onChange={(e) => setImage(e.target.files[0])} />
      </div>

      <div className="add-form-right">
        <div className="form-group">
          <p>Airline Name</p>
          <input type="text" required className="input" value={airline} onChange={(e) => setAirline(e.target.value)} placeholder="e.g Qatar Airways" />
        </div>

        <div className="form-group">
          <p>Flight Title</p>
          <input type="text" required className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g Karachi to Doha – Economy Saver" />
        </div>

        <div className="form-group">
          <p>Description</p>
          <textarea required className="textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g Quick and budget-friendly direct flight..." />
        </div>

        <div className="form-group">
          <p>Duration</p>
          <input type="text" required className="input" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="e.g 2h 50m" />
        </div>

        <div className="form-group">
          <p>Travel Class</p>
          <input type="text" required className="input" value={travelClass} onChange={(e) => setTravelClass(e.target.value)} placeholder="e.g Economy / Business" />
        </div>

        <div className="form-group">
          <p>Flight Type</p>
          <input type="text" required className="input" value={flightType} onChange={(e) => setFlightType(e.target.value)} placeholder="e.g Non-stop / One-stop" />
        </div>

        <div className="form-group">
          <p>Trip Type</p>
          <input type="text" required className="input" value={tripType} onChange={(e) => setTripType(e.target.value)} placeholder="e.g One-way / Round-trip" />
        </div>

        <div className="form-group">
          <p>Select Features (max 4)</p>
          <div className="features">
            {allFeatures.map((feature, i) => (
              <label key={i} className="feature-option">
                <input
                  type="checkbox"
                  checked={features.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                />
                {feature}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <p>Available Dates & Time Slots</p>
          <button type="button" className="add-date-btn" onClick={addDateWithSlots}>+ Add Date</button>
          {availableDates.map((item, dateIdx) => (
            <div key={dateIdx} className="date-slot-block">
              <input
                type="date"
                required
                className="input"
                value={item.date}
                onChange={(e) => updateDate(dateIdx, e.target.value)}
              />
              <div className="time-slot-wrapper">
                {item.timeSlots.map((slot, slotIdx) => (
                  <input
                    key={slotIdx}
                    className="input time-slot"
                    type="time"
                    required
                    value={slot}
                    onChange={(e) => updateTimeSlot(dateIdx, slotIdx, e.target.value)}
                  />
                ))}
              </div>
              <button type="button" className="remove-date-btn" onClick={() => removeDate(dateIdx)}>
                <X size={18} />
              </button>
              <button type="button" className="add-time-btn" onClick={() => addTimeSlot(dateIdx)}>+ Add Time Slot</button>
            </div>
          ))}
        </div>

        <div className="form-group">
          <p>Price ($)</p>
          <input type="number" required className="input" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g 1240" />
        </div>

        <div className="mark-popular">
          <label>
            <input type="checkbox" checked={isPopular} onChange={() => setIsPopular(!isPopular)} />
            Mark as Popular
          </label>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Processing..." : "Submit Flight"}
        </button>
      </div>
    </form>
    </div>
  );
}

export default Add;
