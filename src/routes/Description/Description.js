import React from 'react';
import Header from 'components/Header/Header';
import './Description.css';


const Description = () => {

  return (
    <div className='description'>
      <Header />
      <article className='criterias'>
        <h1>Test task description</h1>
        <hr />
        <p>The task requires a list of products according to the layout, look at the height of the cards - this is important. Pictures for cards are not necessarily cut from the layout, you can take what you want.</p>

        <p>Task should be sent in zip archive with compiled html and css files named after your name, surname and current date (dd/mm/yy), f.e. john_doe_06_08_17.zip. If you want to show sources please upload it to GitHub and attach them as link.</p>

        <p>Time: 2 hours + - 15 minutes based on reading this document.</p>

        <p>To expedite the process, you can use the framework or any other tools at your discretion. The choice is completely up to you / about supporting browsers - to limit IE11+, and the current versions of other browsers, plus mobile browsers iOS and Android.</p>
        <hr />
        <h3>Primary requirements:</h3>
        <ul>
          <li>Font - Roboto - 300;</li>
          <li>One of the products is TOP DEAL - can only be one and always in the first position;</li>
          <li>If the goods are more than 5 (the number of special offers in the layout), they just continue on the next line that’s displayed. Imagine the cards are rendered server - the number of cards and content in them can be different. Therefore, it should be very simple and nothing more needs to break and go.</li>
          <li>The card is a link. When you hover on the card, the border should become equal to 3px, product name becomes underlined (product name in the layout is "Stand mixer ...", the rest shouldn’t be emphasized).</li>
          <li>Some cards have a timer, no need to do javascript logic for timer, let it be static, you must take into account that in addition to the hours of some of the goods may also be days like (23 days 01:23:00). Days are displayed on a separate line for hours at the height of the card should not be changed.</li>
          <li>
            <ul className='sublist'>
              Imposition must be responsive - this is important for the sake of simplicity we take the standard graduation:
              <li>Large> 1200px (3) *</li>
              <li>Middle> 992px (3)</li>
              <li>Small> 768px (2)</li>
              <li>Extra small &#60;767px (1)</li>
            </ul>
          </li>
        </ul>
        <p>*  The figure refers to the number of cards in a row.</p>
      </article>
    </div>
  );
};

export default Description;
