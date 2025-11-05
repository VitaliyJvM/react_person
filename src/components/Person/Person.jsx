import React from 'react';

const MarriedPartner = ({ sex, partnerName }) => (
  <p className="Person__partner">{`${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`}</p>
);

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    {person.isMarried === true ? (
      <MarriedPartner sex={person.sex} partnerName={person.partnerName} />
    ) : (
      <p className="Person__partner">I am not married</p>
    )}
  </section>
);
