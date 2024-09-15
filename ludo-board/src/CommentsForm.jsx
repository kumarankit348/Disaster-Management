import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h4>Give a comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          value={formData.remarks}
          placeholder="add new remarks"
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        >
          Remarks
        </textarea>
        <br />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          value={formData.comment}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <br />
        <button>Add comment</button>
      </form>
    </div>
  );
}
