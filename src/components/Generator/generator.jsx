import React, { useState } from 'react';
import './generator.css'; // Your CSS file for styling
import EEImage from '../../assets/EE.png'; 

const actsOfKindness = [
    'Pay for the person’s coffee behind you in line.',
    'Write a thank you note to someone who has made a difference in your life.',
    'Donate blood to a local blood bank.',
    'Leave a positive note on someone’s car windshield.',
    'Call a friend or family member you haven’t spoken to in a while.',
    'Leave a generous tip for a server.',
    'Compliment a stranger genuinely.',
    'Write an encouraging message on a sticky note and leave it in a public place.',
    'Offer to return a shopping cart to the store for someone.',
    'Prepare a meal for a friend or neighbor.',
    'Volunteer at a local shelter or charity organization.',
    'Give up your seat on public transport to someone else.',
    'Send a care package to a soldier.',
    'Donate books to a library or school.',
    'Plant a tree or some flowers in a community space.',
    'Help someone with their groceries, especially if they seem overwhelmed.',
    'Pay the toll for the car behind you.',
    'Babysit for friends or family for free.',
    'Make two lunches and give one to a homeless person.',
    'Offer to help an elderly neighbor with household chores.',
    'Put a coin in an expired meter.',
    'Write a thank you card for your mail carrier or delivery person.',
    'Bring treats to the office to share with coworkers.',
    'Start a fundraiser for a good cause.',
    'Offer to tutor a student in a subject you are knowledgeable about.',
    'Call or visit someone who may be lonely.',
    'Donate unused clothes or toys to charity.',
    'Pick up litter at a park or beach.',
    'Make bird feeders for your neighborhood.',
    'Share your umbrella with someone during a downpour.'
  ];

const RandomActOfKindness = () => {
  const [act, setAct] = useState('');
  const [showModal, setShowModal] = useState(false);

  const generateAct = () => {
    const randomIndex = Math.floor(Math.random() * actsOfKindness.length);
    setAct(actsOfKindness[randomIndex]);
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };

  return (
    <div className="kindness-container">
      <button onClick={generateAct}>Generate Kindness</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <p className="kindness-act">{act}</p>
            <img className='image' src={EEImage} alt="EE" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomActOfKindness;
