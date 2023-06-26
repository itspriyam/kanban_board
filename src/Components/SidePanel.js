import React  from 'react';
import './SidePanel.css';

const SidePanel = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const [panelWidth, setPanelWidth] = useState(250);

  // const togglePanel = () => {
  //   setIsOpen(!isOpen);
  //   adjustWidth();
  // };

  // const adjustWidth = () => {
  //   const screenWidth = 80;
  //   const newWidth = isOpen ? screenWidth : 250;
  //   setPanelWidth(newWidth);
  // };

  return (
    <div className="side-panel">
      <button className="adjust-btn">
        <i className="bi bi-chevron-double-left rotate"></i>
      </button>
      <div className="content">
        <div className='projectName'>
          <i className="bi bi-people-fill projectNameIcon"></i>
          <h4 >
            Project M.
          </h4>
        </div>
        <div className='navBox1'>
          <ul>
            <li><i class="bi bi-grid projectNameIcon"></i> Home</li>
            <li><i class="bi bi-chat-square-dots projectNameIcon"></i> Messages</li>
            <li><i class="bi bi-card-checklist projectNameIcon"></i> Task</li>
            <li><i class="bi bi-people projectNameIcon"></i> Member</li>
            <li><i class="bi bi-gear projectNameIcon"> </i>Settings</li>
          </ul>
        </div>
        <div className='navBox2'>
          <h6>MY PROJECTS <i className="bi bi-plus-square addProIcon"></i></h6>
          <ul>
            <li className='mobCircle'>Mobile App</li>
            <li className='webCircle'>Website Redesign</li>
            <li className='designCircle'>Design System</li>
            <li className='wireCircle'>Wireframes</li>
          </ul>
        </div>
        <div className='navBox3'>
          <i class="bi bi-lightbulb-fill bulbIcon"></i>
          <p>Thoughts Time</p>
          <p className='p-text'>We don't have any notice for you, till then you can share your thoughts with your peers</p>
          <input type='text' placeholder='Write a message'/>
        </div>

      </div>
    </div>
  );
};

export default SidePanel;
