import React, { useState } from 'react';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [cards, setCards] = useState([
    { id: 1, chip: 'Low', title: 'Braistorming', discription: 'Braistorming brings team member divers expereince into play.', column: 'To Do' },
    { id: 2, chip: 'High', title: 'Research', discription: 'User research helps you to create an optional product for users.', column: 'To Do' },
    { id: 3, chip: 'Low', title: 'Onboarding Illustration', column: 'On Progress' },
    { id: 4, chip: 'Completed', title: 'Mobile App Design', column: 'Done' },
  ]);

  const handleDragStart = (event, card) => {
    event.dataTransfer.setData('cardId', card.id);
    event.dataTransfer.setData('column', card.column);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, column) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('cardId');

    const updatedCards = cards.map((card) => {
      if (card.id === parseInt(cardId, 10)) {
        card.column = column;
      }
      return card;
    });

    setCards(updatedCards);
  };

  return (
    <div className="kanban-board">
      <div className='kanbanHeading'>
        <div className='leftPart'>
          <h2>Mobile App</h2>
          <i className="bi bi-pencil kanbanHeadingIcon"></i>
          <i className="bi bi-link kanbanHeadingIcon"></i>
        </div>
        <div className='rightPart'>
          <i className="bi bi-plus-square kanbanHeadingIcon"></i>
          <apan className="inviteColor">Invite</apan>
          <img className='profileImg' src='https://shelvi.com/face3.jpg' alt='profileImg'></img>
          <img className='profileImg imgSlideLeft' src='https://hyperglot.ai/_next/image?url=%2Favatar.png&w=1920&q=75' alt='profileImg'></img>
          <img className='profileImg imgSlideLeft' src='https://shelvi.com/face2.jpg' alt='profileImg'></img>
          <img className='profileImg imgSlideLeft' src='https://shelvi.com/face1.jpg' alt='profileImg'></img>
          <img className='profileImg imgSlideLeft' src='https://i2.wp.com/www.commercefactory.in/wp-content/uploads/2020/06/2.png?resize=150%2C150&ssl=1' alt='profileImg'></img>
        </div>
      </div>
      <div className='kanbanHeading'>
        <div className='leftPart'>
          <div class="input-group">
            <label class="input-group-text" for=""><i class="bi bi-funnel"></i></label>
            <select class="form-select" aria-label="Filter select">
              <option selected><i class="bi bi-funnel"></i> Filter</option>
              <option value="1">All</option>
              <option value="2">Active</option>
              <option value="3">Inactive</option>
            </select>
          </div>
          <div class="input-group">
            <label class="input-group-text" for=""><i class="bi bi-calendar-date"></i></label>
            <select class="form-select" aria-label="Filter select">
              <option selected><i class="bi bi-funnel"></i>Today</option>
            </select>
          </div>
        </div>
        <div className='rightPart'>
          <button type="button" class="btn btn-outline-secondary"><i className="bi bi-people"></i> Share</button>
          <span className="lineColor"></span>
          <div className='lineEqualBox'>
            <span className="lineEqual"></span>
            <span className="lineEqual"></span>
          </div>
          <i class="bi bi-grid"></i>
        </div>
      </div>
      <div className='kanban-column-box'>
        <div
          className="kanban-column"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, 'To Do')}
        >
          <h2 className='todoBox'>To Do <span className='count'>2</span><i className="bi bi-plus-square addTodoIcon"></i></h2>
          {cards
            .filter((card) => card.column === 'To Do')
            .map((card) => (
              <div
                key={card.id}
                className="kanban-card"
                draggable
                onDragStart={(event) => handleDragStart(event, card)}
              >
                <p><span>{card.chip}</span></p> <div className='dots'><i className="bi bi-three-dots"></i></div>
                <h6>{card.title}</h6>
                <p>{card.discription}</p>
                <p>
                  <img className='commentImg' src='https://shelvi.com/face3.jpg' alt='profileImg'></img>
                  <img className='commentImg imgSlideLeft' src='https://hyperglot.ai/_next/image?url=%2Favatar.png&w=1920&q=75' alt='profileImg'></img>
                  <img className='commentImg imgSlideLeft' src='https://shelvi.com/face2.jpg' alt='profileImg'></img>

                </p><pre className='dots'><i class="bi bi-chat-square-dots"></i> 3comments  <i class="bi bi-folder-check"></i> 0files</pre>
              </div>
            ))}
        </div>
        <div
          className="kanban-column"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, 'On Progress')}
        >
          <h2 className='progressBox'>On Progress <span className='count'>1</span></h2>
          {cards
            .filter((card) => card.column === 'On Progress')
            .map((card) => (
              <div
                key={card.id}
                className="kanban-card"
                draggable
                onDragStart={(event) => handleDragStart(event, card)}
              >
                <p><span>{card.chip}</span></p><div className='dots'><i className="bi bi-three-dots"></i></div>
                <h6>{card.title}</h6>
                <img className='onboardImg' src='https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=652&q=80' alt='profileImg'></img>
                <p>{card.discription}</p>
                <p>
                  <img className='commentImg' src='https://shelvi.com/face3.jpg' alt='profileImg'></img>
                  <img className='commentImg imgSlideLeft' src='https://hyperglot.ai/_next/image?url=%2Favatar.png&w=1920&q=75' alt='profileImg'></img>
                  <img className='commentImg imgSlideLeft' src='https://shelvi.com/face2.jpg' alt='profileImg'></img>
                </p><pre className='dots'><i class="bi bi-chat-square-dots"></i> 4comments  <i class="bi bi-folder-check"></i> 5files</pre>
              </div>
            ))}
        </div>
        <div
          className="kanban-column"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, 'Done')}
        >
          <h2 className='doneBox'>Done <span className='count'>1</span></h2>
          {cards
            .filter((card) => card.column === 'Done')
            .map((card) => (
              <div
                key={card.id}
                className="kanban-card"
                draggable
                onDragStart={(event) => handleDragStart(event, card)}
              >
                <p><span className='compChip'>{card.chip}</span></p><div className='dots'><i className="bi bi-three-dots"></i></div>
                <h6>{card.title}</h6>
                <img className='mobileAppImg' src='https://cdn.dribbble.com/users/3094188/screenshots/16909051/media/edc8ced34849e83f32b3a05c2df09b5d.png?compress=1&resize=1000x750&vertical=center' alt='profileImg'></img>
                <p>{card.discription}</p>
                <p>
                  <img className='commentImg' src='https://shelvi.com/face3.jpg' alt='profileImg'></img>
                  <img className='commentImg imgSlideLeft' src='https://hyperglot.ai/_next/image?url=%2Favatar.png&w=1920&q=75' alt='profileImg'></img>
                </p><pre className='dots'><i class="bi bi-chat-square-dots"></i> 2comments  <i class="bi bi-folder-check"></i> 5files</pre>
              </div>
            ))}
            
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
