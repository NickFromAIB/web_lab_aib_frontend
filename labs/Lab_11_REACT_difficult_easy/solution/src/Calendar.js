import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import { ru } from 'date-fns/locale';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newNote, setNewNote] = useState('');

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setModalIsOpen(true);
  };

  const handleAddNote = () => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [selectedDate]: [...(prevNotes[selectedDate] || []), newNote],
    }));
    setModalIsOpen(false);
    setNewNote('');
  };

  const handleRemoveNote = (date, index) => {
    setNotes((prevNotes) => {
      const updatedNotes = { ...prevNotes };
      updatedNotes[date] = updatedNotes[date].filter((_, i) => i !== index);
      return updatedNotes;
    });
  };

  const getDaysInMonth = () => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });
    return daysInMonth;
  };
  const handleCurrentMonth = () => {
    setCurrentMonth(new Date());
  };

  return (
    <div>
      <div className='buttonsnp'>
        <button className='prevbtn'onClick={handlePrevMonth}>~~</button>
        <span>{capitalizeFirstLetter(format(currentMonth, 'MM yyyy', { locale: ru }))}</span>
        <button className='nextbtn'onClick={handleNextMonth}>~~</button>
      </div>
      
      <div className='calend'>
        {getDaysInMonth().map((date) => (
          <div
            key={date.toString()}
            onClick={() => setSelectedDate(date)}
            className={`daycal ${isToday(date) ? 'today' : ''} ${selectedDate && date.getTime() === selectedDate.getTime() ? 'selected' : ''}`}
            style={{  cursor: 'pointer', position: 'relative' }}
          >
            {format(date, 'd')}
            {notes[date] && notes[date].length > 0 && (
              <div style={{ position: 'absolute', bottom: 0, right: 0, background: '#ffc107', padding: '2px 5px' }}>
                {notes[date].length} {}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='btsadd'>
        <button className='addnote'onClick={() => setModalIsOpen(true)}>Добавить</button>
        <button className='addnote'onClick={handleCurrentMonth}>Текущий месяц</button>
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '300px',
            margin: 'auto',
            marginTop: '100px',
          },
        }}
      >
        <div>
          <h3>Добавить заметку</h3>
          <textarea
            rows="4"
            cols="30"
            placeholder="Введите заметку"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button className='addnote' onClick={handleAddNote}>Добавить</button>
        </div>
      </Modal>
      <div>
        {selectedDate && (
          <div>
            {notes[selectedDate] ? (
              notes[selectedDate].map((note, index) => (
                <div key={index}>
                  <p>{note}</p>
                  <button className='delbut'onClick={() => handleRemoveNote(selectedDate, index)}>Удалить</button>
                </div>
              ))
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
