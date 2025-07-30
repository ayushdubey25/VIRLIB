import React, { useState, useRef, useEffect } from "react";
import "../../Styling/Author_profile.css";
import defaultProfile from "../../assets/Images/profile.png";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(defaultProfile);
  const [newImage, setNewImage] = useState(null); // for selected image before saving
  const [menuOpen, setMenuOpen] = useState(false);
  const [authorData, setAuthorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    booksPublished: 0,
    averageRating: 0,
    feedbackCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user.id) {
        console.error("No user ID found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5050/api/auth/author/${user.id}`
        );
        const data = await res.json();
        setAuthorData(data);
        if (data.profileImage) setProfileImage(data.profileImage);
      } catch (err) {
        console.error("Failed to fetch author profile", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user.id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewImage(reader.result); // only set as preview for now
    };
    reader.readAsDataURL(file);
  };

  const handleSaveImage = async () => {
    if (!newImage || !user.id) return;

    try {
      const res = await fetch(
        `http://localhost:5050/api/auth/update-profile-image/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profileImage: newImage }),
        }
      );
      if (res.ok) {
        alert("✅ Profile image updated!");
        setProfileImage(newImage); // permanently update
        setNewImage(null); // reset
      } else {
        alert("❌ Failed to update profile image");
      }
    } catch (err) {
      console.error("Error saving image:", err);
      alert("❌ Server error");
    }
  };

  const handleRemove = async () => {
    if (!user.id) return;

    setProfileImage(defaultProfile);
    setNewImage(null);
    setMenuOpen(false);

    await fetch(
      `http://localhost:5050/api/auth/update-profile-image/${user.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileImage: "" }),
      }
    );
  };

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleEdit = () => {
    fileInputRef.current.click();
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <p>Loading author profile...</p>;

  return (
    <div className="author-profile-wrapper">
      <div className="profile-details-box">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <img
              src={newImage || profileImage || defaultProfile}
              alt="Profile"
              width="150"
              height="150"
              className="profile-img"
            />
            <div className="menu-wrapper" ref={menuRef}>
              <button onClick={handleMenuToggle} className="menu-dots">
                ⋮
              </button>
              {menuOpen && (
                <div className="menu-dropdown">
                  <p onClick={() => alert("Viewing Profile")}>👁 View Profile</p>
                  <p onClick={handleEdit}>✏️ Edit Profile</p>
                  <p onClick={handleRemove}>🗑 Remove Profile</p>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleImageChange}
            />

            {newImage && (
              <button className="save-btn" onClick={handleSaveImage}>
                💾 Save
              </button>
            )}
          </div>

          <div className="author-profile-container">
            <h2 className="profile-title">Author Profile</h2>

            <div className="profile-detail-row">
              <span className="label">Author Name:</span>
              <span className="value">
                {authorData.firstName} {authorData.lastName}
              </span>
            </div>

            <div className="profile-detail-row">
              <span className="label">Email:</span>
              <span className="value">{authorData.email}</span>
            </div>

            <div className="profile-detail-row">
              <span className="label">Books Published:</span>
              <span className="value">{authorData.booksPublished}</span>
            </div>

            <div className="profile-detail-row">
              <span className="label">Average Rating:</span>
              <span className="value">{authorData.averageRating}</span>
            </div>

            <div className="profile-detail-row">
              <span className="label">Total Feedbacks:</span>
              <span className="value">{authorData.feedbackCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
