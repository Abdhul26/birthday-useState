import React from "react";

const List = (props) => {
  const { people } = props;
  return (
    <>
      {people.map((person) => {
        // const { id, name, age, image } = person;
        return (
          <article key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <h3>{person.age} years old</h3>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
