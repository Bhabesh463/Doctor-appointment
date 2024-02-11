import React, { useState, useEffect } from 'react';

const AppointmentReminders = () => {
  const [reminders, setReminders] = useState([]);
  const [attachments, setAttachments] = useState({});

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const mockReminders = [
          { id: 1, summary: "Meeting with Doctor", start: { dateTime: new Date().toISOString() } },
          
        ];
        setReminders(mockReminders);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, []);

  const handleFileInputChange = (reminderId, event) => {
    const file = event.target.files[0];
    setAttachments(prevAttachments => ({
      ...prevAttachments,
      [reminderId]: file
    }));
  };

  return (
    <div className='Folder-link'>
      {reminders.length === 0 ? (
        <p>No reminders found</p>
      ) : (
        <ul>
          {reminders.map(reminder => (
            <li key={reminder.id}>
              <strong>{reminder.summary}</strong> - {new Date(reminder.start.dateTime).toLocaleString()}
              <div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  onChange={(event) => handleFileInputChange(reminder.id, event)}
                />
              </div>
              {/* Display attachments if available */}
              {attachments[reminder.id] && (
                <p>Attachment: {attachments[reminder.id].name}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentReminders;

// export default AppointmentReminders;
