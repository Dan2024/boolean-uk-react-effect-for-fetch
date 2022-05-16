import { useEffect, useState } from "react";

function UsersSection() {
  const [usersArray, setUsersArray] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=10`)
      .then((response) => response.json())
      .then((users) => {
        setUsersArray(users.results);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul class="users-list">
          {usersArray &&
            usersArray.map((user, index) => (
              <li
                key={index}
                class={user.gender === "male" ? `bg-blue` : `bg-pink`}
              >
                <img src={user.picture.medium} alt="Ritthy Ryan" />
                <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                <p>{user.email}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
