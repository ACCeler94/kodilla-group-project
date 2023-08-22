import React from 'react';
import styles from './Chatbot.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faTimes, faRedo } from '@fortawesome/free-solid-svg-icons';
const Chatbot = () => {
  const [chatbotIsOpen, setchatbotIsOpen] = useState(false);

  const handleChatbot = e => {
    e.preventDefault();
    setchatbotIsOpen(!chatbotIsOpen);
  };

  return (
    <div className={styles.root}>
      <div onClick={handleChatbot} className={styles.chatbotButton}>
        <div className={styles.chatbotButtonDiv}>
          <p>Do you need help? Write to us!</p>
        </div>
      </div>
      <div
        className={`${styles.chatbotContainer} ${chatbotIsOpen ? styles.active : ''}`}
      >
        <div className={styles.chatbotBox}>
          <div className={styles.toolsChatbotArea}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faRedo} className={styles.icon} />
              <FontAwesomeIcon icon={faTimes} className={styles.icon} />
            </div>
          </div>
          <div className={styles.textChatbotArea}>
            <div className={styles.welcomeText}>Hello, how can I help you?</div>
          </div>
          <div className={styles.writeMessageArea}>
            <textarea placeholder='Ask your question here...'></textarea>
            <FontAwesomeIcon icon={faPaperPlane} className={styles.iconPointer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
